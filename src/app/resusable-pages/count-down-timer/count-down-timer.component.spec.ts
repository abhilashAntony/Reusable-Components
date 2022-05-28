import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CountDownTimerComponent } from './count-down-timer.component';

describe('CountDownTimerComponent', () => {
  let component: CountDownTimerComponent;
  let fixture: ComponentFixture<CountDownTimerComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggles timer', () => {
    const toggleButton = debugElement.query(By.css('[data-testid="toggle-button"]'));
    console.log(toggleButton);
  });
});
