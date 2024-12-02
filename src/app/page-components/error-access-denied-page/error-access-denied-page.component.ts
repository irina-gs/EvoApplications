import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error-access-denied-page',
  templateUrl: './error-access-denied-page.component.html',
  styleUrls: ['./error-access-denied-page.component.css']
})
export class ErrorAccessDeniedPageComponent implements OnInit {
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Foodie: Доступ запрещен')
  }
}
