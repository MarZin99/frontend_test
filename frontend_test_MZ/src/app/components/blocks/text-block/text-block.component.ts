import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sentence } from '../../../models/sentence.model';

@Component({
  selector: 'app-text-block',
  standalone: true,
  imports: [],
  templateUrl: './text-block.component.html',
  styleUrl: './text-block.component.scss',
})
export class TextBlockComponent {
  @Input() sentences: Sentence[] = [];
}
