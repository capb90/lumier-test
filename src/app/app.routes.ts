import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./modules/auth').then((m) => m.AuthRoutes),
  },
  {
    path:'main',
    loadChildren:()=>import('./modules/consulting/consulting.routes').then(m=>m.ConsultingRoutes)
  }
];
