import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.meta.addTag({ property: 'og:desc', content: 'root_desc' })
    this.title.setTitle('Desk Page')
  }
}
