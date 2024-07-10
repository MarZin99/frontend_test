import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { CiaComponent } from '../../additional/cia/cia.component';
import { DropdownComponent } from '../../additional/dropdown/dropdown.component';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NameProvider } from '../../services/name.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [FontAwesomeModule, CiaComponent, DropdownComponent],
})
export class FooterComponent {
  constructor(
    private nameProvider: NameProvider,
    private deviceService: DeviceDetectorService
  ) {
    nameProvider = nameProvider;
  }
  isMobile = this.deviceService.isMobile();
  faFontAwesome = faFontAwesome;
  faChevronRight = faChevronRight;

  isVisible = false;

  toogleVisibleMenu() {
    this.isVisible = !this.isVisible;
  }

  toggleName() {
    this.nameProvider.toggleIsVisible();
  }

  resetPage() {
    window.location.reload();
  }
}
