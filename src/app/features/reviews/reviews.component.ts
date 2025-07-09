import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule, RouterModule],
  templateUrl: './reviews.component.html',
  standalone: true,
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {

}
