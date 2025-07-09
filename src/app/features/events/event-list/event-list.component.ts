import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-eventi',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  eventi = [
    { id: 1, nome: 'Concerto Rock' },
    { id: 2, nome: 'Conferenza Tech' },
    { id: 3, nome: 'Mostra d’arte' }
  ];
}
