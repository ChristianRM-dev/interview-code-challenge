import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: 'challenge-1',
        loadComponent: () => import('./challenge-1/register-form/register-form.component').then(m => m.RegisterFormComponent)
      },
      {
        path: 'challenge-2',
        loadComponent: () => import('./empty/empty.component').then(m => m.EmptyComponent)
      },
      {
        path: 'challenge-3',
        loadComponent: () => import('./empty/empty.component').then(m => m.EmptyComponent)
      },
      {
        path: 'challenge-4',
        loadComponent: () => import('./empty/empty.component').then(m => m.EmptyComponent)
      }
    ]
  }];
