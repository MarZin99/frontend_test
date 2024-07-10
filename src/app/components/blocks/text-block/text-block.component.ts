import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sentence } from '../../../models/sentence.model';
import { SortPipe } from '../../../pipes/sort.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-text-block',
  standalone: true,
  imports: [SortPipe, FontAwesomeModule],
  templateUrl: './text-block.component.html',
  styleUrl: './text-block.component.scss',
})
export class TextBlockComponent {
  constructor(private deviceDetector: DeviceDetectorService) {}
  isMobile = this.deviceDetector.isMobile();
  @Output() removeSentence = new EventEmitter<number>();

  @Input() sentences: Sentence[] = [];
  closeIcon = faX;

  test(value: number) {
    this.removeSentence.emit(value);
  }
}
