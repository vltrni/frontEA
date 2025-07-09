import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

//CAN ACTIVATE SERVE PER AFR REINDIRIZZARE SOLO SE SI è LOGGATI


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./features/events/events.component').then(m => m.EventsComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/events/event-list/event-list.component').then(m => m.EventListComponent)
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./features/events/event-detail/event-detail.component').then(m => m.EventDetailComponent)
      }
    ]
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/profile.component').then(m => m.ProfileComponent),
    //canActivate: [AuthGuard]
  },
  {
    path: 'preferiti',
    loadComponent: () =>
      import('./features/favorites/favorites.component').then(m => m.FavoritesComponent),
    //canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/admin.component').then(m => m.AdminComponent),
    //canActivate: [AdminGuard]
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('./features/auth/registration/registration.component').then(m => m.RegistrationComponent)
  },
  {
    path: 'bookings',
    loadComponent: () =>
      import('./features/booking/booking.component').then(m => m.BookingComponent),
    //canActivate: [AuthGuard]
  },
  // {
  //   path: 'bookings/:id',
  //   loadComponent: () =>
  //     import('./features/booking/booking-detail.component').then(m => m.BookingDetailComponent),
  //   canActivate: [AuthGuard]
  // },
];
