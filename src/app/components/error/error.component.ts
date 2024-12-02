import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  @Input() numberError: number = 404
  @Input() title: string = ''
  @Input() text: string = ''

  constructor(private location: Location) { }

  goBack() {
    this.location.back()
  }
}
