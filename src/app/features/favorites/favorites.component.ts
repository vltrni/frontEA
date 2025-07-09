import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule, RouterModule],
  templateUrl: './favorites.component.html',
  standalone: true,
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

}
