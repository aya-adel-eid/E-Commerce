import { Component, inject } from '@angular/core';

import { LoginFormComponent } from '../../../feature/auth/components/login-form/login-form.component';

@Component({
  selector: 'app-modal',
  imports: [LoginFormComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  showModal = false;

  open() {
    this.showModal = true;
  }

  close() {
    this.showModal = false;
  }

  onLoginSuccess() {
    this.close();
  }
}
