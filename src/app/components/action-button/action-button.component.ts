import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent {
  @Input() image: string = ''
  @Input() title: string = ''
  @Input() onClick: () => void = () => { }
}
