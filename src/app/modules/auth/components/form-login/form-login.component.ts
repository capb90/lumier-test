import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  imports: [FormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLoginComponent { 
  public showPassword = false;
}
