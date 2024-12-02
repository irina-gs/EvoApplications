import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Foodie: Регистрация')
  }
}
