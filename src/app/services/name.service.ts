import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NameProvider {
  subPageName = 'Marcin Zawadzki';
  private isVisible = new BehaviorSubject<boolean>(false);
  boolean$ = this.isVisible.asObservable();

  toggleIsVisible() {
    this.isVisible.next(!this.isVisible.getValue());
  }
}
