import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todo: object = {}

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTodos().subscribe({
      next: (response: any) => {
        console.log(response)
        this.todo = response
      },
      error: (err: HttpErrorResponse) => { console.error(`Ошибка! Код: ${err.status}`) }
    })
  }
}
