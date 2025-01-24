import { Routes } from '@angular/router';

export const AuthRoutes: Routes = [
  {
    path: 'login',
    title: 'Iniciar sesión',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
];
