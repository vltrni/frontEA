import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RegistrationComponent {
  username = '';
  password = '';
  role = '';
  accessType = '';
  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  onRegister() {
    const newUser = {
      username: this.username,
      password: this.password,
      role: this.role,
      accessType: this.accessType
    };

    this.http.post('http://localhost:8080/api/users', newUser).subscribe({
      next: () => {
        this.successMessage = 'Registrazione avvenuta con successo!';
        this.errorMessage = '';
        // Eventuale redirect dopo qualche secondo
        this.router.navigate(['/auth'])
      },
      error: (err) => {
        console.error(err);
        this.successMessage = '';
        this.errorMessage = 'Errore durante la registrazione.';
      }
    });
  }
}
