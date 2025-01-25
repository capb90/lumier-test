import { Routes } from '@angular/router';

export const AuthRoutes: Routes = [
  {
    path: '',
    title: 'Iniciar sesión',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path:'**',
    redirectTo:''
  }
];
