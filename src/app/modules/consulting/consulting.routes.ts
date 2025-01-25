import { Routes } from '@angular/router';

export const ConsultingRoutes: Routes = [
  {
    path: 'paciente',
    title: 'Consultar Estudio - Paciente',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
];
