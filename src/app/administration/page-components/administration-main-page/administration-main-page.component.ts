import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-administration-main-page',
  templateUrl: './administration-main-page.component.html',
  styleUrls: ['./administration-main-page.component.css']
})
export class AdministrationMainPageComponent implements OnInit {
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Foodie: Администрирование')
  }
}
