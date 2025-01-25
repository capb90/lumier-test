import { Routes } from '@angular/router';
import { ConsultingLayoutComponent } from './layout/consulting-layout/consulting-layout.component';

export const ConsultingRoutes: Routes = [
  {
    path: '',
    component:ConsultingLayoutComponent,
    children: [
      {
        path: 'paciente',
        title: 'Consultar Estudio - Paciente',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'perfil',
        title: 'Perfil - Paciente',
        loadComponent: () =>
          import('./pages/profile/profile.component').then((m) => m.ProfileComponent),
      },
    ],
  },
];
