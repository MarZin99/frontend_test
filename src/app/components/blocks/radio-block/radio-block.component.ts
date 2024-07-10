import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-radio-block',
  standalone: true,
  imports: [],
  templateUrl: './radio-block.component.html',
  styleUrl: './radio-block.component.scss',
})
export class RadioBlockComponent {
  constructor(private deviceDetector: DeviceDetectorService) {}
  isMobile = this.deviceDetector.isMobile();
  @Output() radioSelectedEvent = new EventEmitter<number>();
  selectedRadioItem = 0;

  selectRadioItem(value: number) {
    this.radioSelectedEvent.emit(value);
  }
}
