import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-action-block',
  standalone: true,
  imports: [],
  templateUrl: './action-block.component.html',
  styleUrl: './action-block.component.scss',
})
export class ActionBlockComponent {
  @Output() editSentence = new EventEmitter<string>();

  editSentencesList(value: string) {
    this.editSentence.emit(value);
  }
}
