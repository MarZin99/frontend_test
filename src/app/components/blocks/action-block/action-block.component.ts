import { Component, EventEmitter, Output } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-action-block',
  standalone: true,
  imports: [],
  templateUrl: './action-block.component.html',
  styleUrl: './action-block.component.scss',
})
export class ActionBlockComponent {
  constructor(private deviceDetector: DeviceDetectorService) {}
  isMobile = this.deviceDetector.isMobile();
  @Output() editSentence = new EventEmitter<string>();

  editSentencesList(value: string) {
    this.editSentence.emit(value);
  }
}
