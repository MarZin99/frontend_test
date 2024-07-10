import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sentence } from '../../../models/sentence.model';
import { SortPipe } from '../../../pipes/sort.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-text-block',
  standalone: true,
  imports: [SortPipe, FontAwesomeModule],
  templateUrl: './text-block.component.html',
  styleUrl: './text-block.component.scss',
})
export class TextBlockComponent {
  @Output() removeSentence = new EventEmitter<number>();

  @Input() sentences: Sentence[] = [];
  closeIcon = faX;

  test(value: number) {
    this.removeSentence.emit(value);
  }
}
