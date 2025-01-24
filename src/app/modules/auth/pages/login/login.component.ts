import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardLoginComponent } from '../../components/card-login/card-login.component';
import { FormLoginComponent } from '../../components/form-login/form-login.component';


@Component({
  selector: 'app-login',
  imports: [CardLoginComponent,FormLoginComponent],
  templateUrl: `./login.component.html`,
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent { }
