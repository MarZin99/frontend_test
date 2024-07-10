import { Component } from '@angular/core';
import { Toast } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faExclamationTriangle,
  faExclamationCircle,
  faInfoCircle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent extends Toast {
  faExclamationTriangle = faExclamationTriangle;
  faInfoCircle = faInfoCircle;
  faExclamationCircle = faExclamationCircle;
  faCheckCircle = faCheckCircle;
}
