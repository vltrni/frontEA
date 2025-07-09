import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component'; // importa il tuo header

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent], // importa anche RouterModule per <router-outlet>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tickettwo';
}
