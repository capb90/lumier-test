import {
  ChangeDetectionStrategy,
  Component,
  input
} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  AllCommunityModule,
  ColDef,
  ModuleRegistry,
  RowSelectionOptions,
  Theme,
  themeQuartz
} from 'ag-grid-community';

ModuleRegistry.registerModules([
  AllCommunityModule
]);

const myTheme = themeQuartz.withParams({
  selectedRowBackgroundColor: 'rgba(0, 255, 0, 0.1)',
});

@Component({
  selector: 'app-dynamic-table',
  imports: [AgGridAngular],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicTableComponent {
  public dataSet = input.required<any[]>();
  public loading = input<boolean>(false);
  public columnDefs = input.required<ColDef[]>();
  public theme: Theme | 'legacy' = myTheme;
  public rowSelection: RowSelectionOptions | 'single' | 'multiple' = {
    mode: 'multiRow',
  };
  public defaultColDef: ColDef = {
    editable: false,
    filter: true,
    floatingFilter: true,
  };
}
