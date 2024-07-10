import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-block',
  standalone: true,
  imports: [],
  templateUrl: './radio-block.component.html',
  styleUrl: './radio-block.component.scss',
})
export class RadioBlockComponent {
  @Output() radioSelectedEvent = new EventEmitter<number>();
  selectedRadioItem = 0;

  selectRadioItem(value: number) {
    this.radioSelectedEvent.emit(value);
  }
}
