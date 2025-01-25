import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import {
  ButtonActionsComponent,
  DynamicCardComponent,
  DynamicTableComponent
} from '@app/modules/shared';
import { ColDef, IDateFilterParams } from 'ag-grid-community';
import { IData } from '../../interfaces/consulting.interfaces';
import { ConsultingService } from '../../services/consulting.service';

const filterParams: IDateFilterParams = {
  comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
    const dateAsString = cellValue;
    if (dateAsString == null) return -1;
    const dateParts = dateAsString.split('/');
    const cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
    return 0;
  },
  minValidYear: 2000,
  maxValidYear: 2021,
  inRangeFloatingFilterDateFormat: 'Do MMM YYYY',
};

const columns: ColDef<IData>[] = [
  {
    headerName: 'Fecha Cita',
    filter: 'agDateColumnFilter',
    filterParams: filterParams,
    valueGetter: (p) => `${p.data?.fechaCita} ${p.data?.horaCita}`,
  },
  { field: 'pacienteIdentificacion', headerName: 'ID', filter: false },
  { field: 'pacienteNombre', headerName: 'Nombre', filter: false },
  {
    headerName: 'Modalidad - Examen',
    filter: false,
    width: 780,
    valueGetter: (p) =>
      p.data?.examenes.map((n) => n.nombre).reduce((a, t) => a + ',' + t),
  },
  { field: 'estadoExamenNombre', headerName: 'Estado' },
  {
    headerName: 'Acciones',
    lockPosition: 'left',
    filter: false,
    width: 300,
    cellRenderer: ButtonActionsComponent,
  },
];

@Component({
  selector: 'app-home',
  imports: [DynamicCardComponent, DynamicTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private consultingService = inject(ConsultingService);
  public dataSet = signal<IData[]>([]);
  public columnDef = columns;

  public ngOnInit(): void {
    this.getDemoInfo();
  }

  public getDemoInfo() {
    this.consultingService.getPatientInfo().subscribe({
      next: (payload) => {
        this.dataSet.set(payload.datos);
      },
    });
  }
}
