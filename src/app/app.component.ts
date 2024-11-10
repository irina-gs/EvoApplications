import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrayCats = [
    {
      name: 'Cat_1'
    },
    {
      name: 'Cat_2'
    },
    {
      name: 'Cat_3'
    },
  ]

  dateNow = new Date()
}
