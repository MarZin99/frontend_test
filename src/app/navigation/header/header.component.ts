import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { NameProvider } from '../../services/name.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private nameProvider: NameProvider) {}

  subName = '';
  isVisible = false;
  private subscription!: Subscription;

  ngOnInit(): void {
    this.subName = this.nameProvider.subPageName;
    this.subscription = this.nameProvider.boolean$.subscribe((value) => {
      this.isVisible = value;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  faHtml5 = faHtml5;
}
