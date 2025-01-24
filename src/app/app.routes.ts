import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth').then((m) => m.AuthRoutes),
  },
];
