import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  faChevronUp = faChevronUp;
  faChevronRight = faChevronRight;
  menuIsHidden = true;

  @Output() showMenu = new EventEmitter<any>();

  editSentencesList() {
    this.showMenu.emit();
  }
}
