import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { expectText } from 'src/app/spec-helpers/element.spec-helper';

import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displays the present time without helper', () => {
    const element = debugElement.query(By.css('[data-testid="display-time"]'));
    const expectedText = '0s';
    const actualText = element.nativeElement.textContent;

    expect(actualText).withContext('Text does not match').toBe(expectedText);
  });

  it('displays the correct time with helper function', () => {
    expectText(fixture, 'display-time', '0s');
  });

  it('ends the timer', () => {
    component.timeLimit = 10;
    component.status = 'PLAY';

    const tLimit = new SimpleChange(0, 10, false);
    const s = new SimpleChange('PAUSE', 'PLAY', false);
    const changes = {
      timeLimit: tLimit,
      status: s
    };
    component.ngOnChanges(changes);
    fixture.detectChanges();

    expect(component.countDownTime).withContext('Does not match the input').toBe(component.timeLimit);

  });
});

export class SimpleChange {
  constructor(previousValue: any, currentValue: any, firstChange: boolean) {
    this.previousValue = previousValue;
    this.currentValue = currentValue;
    this.firstChange = firstChange;
  }
  previousValue: any;
  currentValue: any
  firstChange: boolean;
  isFirstChange(): boolean {
    return false;
  }
}
