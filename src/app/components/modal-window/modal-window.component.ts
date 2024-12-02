import { Component, Input } from '@angular/core';
import { ModalWindowService } from 'src/app/services/modal-window/modal-window.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent {
  @Input() title: string = ''
  @Input() message: string = ''
  @Input() confirmText: string = ''
  @Input() cancelText: string = ''
  @Input() isDelete: boolean = false
  @Input() onConfirm: () => void = () => { }

  constructor(private modalWindowService: ModalWindowService) { }

  confirm(): void {
    this.onConfirm()
  }

  cancel(): void {
    this.modalWindowService.closeModalWindow()
  }
}
