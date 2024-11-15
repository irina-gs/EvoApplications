import { Component } from '@angular/core';
import { Book } from './interfaces/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    },
  ]

  createdBook: Book = {
    title: null,
    author: null
  }

  addBook() {
    this.books.push({
      title: this.createdBook.title,
      author: this.createdBook.author
    })
  }
}
