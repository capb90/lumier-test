import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicCardComponent } from '@app/modules/shared';

@Component({
  selector: 'app-profile',
  imports: [DynamicCardComponent, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent { 
}
