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
  invitationCode = '';


  constructor(private http: HttpClient, private router: Router) {}

  onRegister() {
    const newUser: any = {
      username: this.username,
      password: this.password,
      role: this.role,
      accessType: this.accessType
    };

    // Aggiungi il codice di invito solo se organizer
    if (this.role === 'organizer') {
      newUser.invitationCode = this.invitationCode;
    }

    this.http.post('http://localhost:8080/api/users', newUser).subscribe({
      next: () => {
        this.successMessage = 'Registrazione avvenuta con successo!';
        this.errorMessage = '';
        this.router.navigate(['/auth']);
      },
      error: (err) => {
        console.error(err);
        this.successMessage = '';
        this.errorMessage = 'Errore durante la registrazione.';
      }
    });
  }

}
