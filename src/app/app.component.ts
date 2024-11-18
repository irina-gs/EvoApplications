import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService: DataService) { }

  getAllPosts() {
    this.dataService.getAllPosts().subscribe({
      next: (response) => { console.log(response) }
    })
  }

  getComments() {
    this.dataService.getComments().subscribe({
      next: (response) => { console.log(response) }
    })
  }

  createPost() {
    this.dataService.createPost().subscribe({
      next: (response) => { console.log(response) }
    })
  }

  getPost() {
    this.dataService.getPost().subscribe({
      next: (response) => { console.log(response) },
      error: (err: HttpErrorResponse) => {
        console.error(`Ошибка! Код: ${err.status}. Сообщение: ${err.message}`)
      }
    })
  }

  getAllPostsText() {
    this.dataService.getAllPostsText().subscribe({
      next: (response) => { console.log(response) }
    })
  }

  deletePost() {
    this.dataService.deletePost().subscribe({
      next: (response) => { console.log(response) }
    })
  }
}
