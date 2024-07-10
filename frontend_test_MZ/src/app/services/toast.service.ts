import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, title: string = 'Success') {
    this.toastr.show(message, title, { timeOut: 5000 }, 'success');
  }
  showInfo(message: string, title: string = 'Info') {
    this.toastr.show(message, title, { timeOut: 5000 }, 'info');
  }
  showError(message: string, title: string = 'Error') {
    this.toastr.show(message, title, { timeOut: 5000 }, 'error');
  }
  showWarning(message: string, title: string = 'Warning') {
    this.toastr.show(message, title, { timeOut: 5000 }, 'warning');
  }
}
