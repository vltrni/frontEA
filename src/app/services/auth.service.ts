import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuthenticated(): boolean {
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('token');
    }
    return false;
  }

  isAdmin(): boolean {
    if (typeof localStorage !== 'undefined') {
      const ruolo = localStorage.getItem('ruolo');
      return ruolo !== null && ruolo.toLowerCase() === 'admin';
    }
    return false;
  }

  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('ruolo');
    }
  }

}
