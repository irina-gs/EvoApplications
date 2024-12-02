import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-recipe-page',
  templateUrl: './create-recipe-page.component.html',
  styleUrls: ['./create-recipe-page.component.css']
})
export class CreateRecipePageComponent implements OnInit {
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Foodie: Создание рецепта')
  }
}
