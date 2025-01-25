import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from '@app/modules/shared';

@Component({
  selector: 'app-consulting-layout',
  imports: [MainLayoutComponent, RouterModule],
  templateUrl: './consulting-layout.component.html',
  styleUrl: './consulting-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultingLayoutComponent { }
