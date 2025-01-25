import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-button-actions',
  imports: [],
  templateUrl: './button-actions.component.html',
  styleUrl: './button-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonActionsComponent implements ICellRendererAngularComp {
  params: any;

  public agInit(params: any): void {
    this.params = params;
  }

  public refresh(): boolean {
    return false;
  }

  public onEdit() {
    alert(`Editar: ${this.params.data.name}`);
  }

  public onDelete() {
    if (confirm(`¿Eliminar ${this.params.data.name}?`)) {
      const rowNode = this.params.api.getRowNode(this.params.node.id);
      rowNode.setData(null);
    }
  }
}
