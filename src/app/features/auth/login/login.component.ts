import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    FormsModule,
    CommonModule
  ],
  standalone: true
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const credentials = { username: this.username, password: this.password };

    this.http.post<any>('http://localhost:8080/auth/login', credentials).subscribe({
      next: (response) => {
        const token = response.token;
        localStorage.setItem('token', token);

        // Decodifica il token per ottenere il ruolo
        const payloadBase64 = token.split('.')[1];
        const payload = JSON.parse(atob(payloadBase64));
        const role = payload.role;

        localStorage.setItem('ruolo', role);

        // Redirect basato sul ruolo
        if (role === 'organizer') {
          this.router.navigate(['/bookings']);
        } else if (role === 'participant') {
          this.router.navigate(['/events']);
        } else {
          this.router.navigate(['/']); // fallback
        }
      },
      error: (err) => {
        console.error(err);
        if (err.status === 401) {
          this.errorMessage = 'Username o password non validi.';
        } else {
          this.errorMessage = 'Errore durante il login. Riprova più tardi.';
        }
      }

    });
  }

  goToRegister() {
    this.router.navigate(['/registration']);
  }


}
