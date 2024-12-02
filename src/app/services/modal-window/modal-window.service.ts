import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalWindowComponent } from 'src/app/components/modal-window/modal-window.component';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {
  private modalRef!: BsModalRef

  constructor(private modalService: BsModalService) { }

  openModalWindow(
    title: string,
    message: string,
    confirmText: string,
    cancelText: string,
    isDelete: boolean,
    onConfirm: () => void
  ) {
    this.modalRef = this.modalService.show(ModalWindowComponent, {
      initialState: {
        title,
        message,
        confirmText,
        cancelText,
        isDelete,
        onConfirm: () => {
          onConfirm()
          this.closeModalWindow()
        }
      }
    })
  }

  closeModalWindow(): void {
    this.modalRef.hide()
  }
}
