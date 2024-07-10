import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ContentComponent],
})
export class AppComponent {
  constructor(private deviceDetector: DeviceDetectorService) {}

  title = 'frontend_test_MZ';
  isMobile = this.deviceDetector.isMobile();
}
