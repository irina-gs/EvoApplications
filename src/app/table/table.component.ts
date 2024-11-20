import { Component } from '@angular/core';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  books: Book[] = [
    {
      title: 'Ревизор',
      author: 'Н.Гоголь'
    },
    {
      title: 'Обломов',
      author: 'И.Гончаров'
    },
    {
      title: 'Гроза',
      author: 'А.Островский'
    }
  ]
}
