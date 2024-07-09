import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBlockComponent } from './radio-block.component';

describe('RadioBlockComponent', () => {
  let component: RadioBlockComponent;
  let fixture: ComponentFixture<RadioBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
