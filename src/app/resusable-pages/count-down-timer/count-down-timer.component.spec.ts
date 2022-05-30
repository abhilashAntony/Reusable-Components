import { Component, DebugElement, EventEmitter, Input, NO_ERRORS_SCHEMA, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { expectText, findComponent } from 'src/app/spec-helpers/element.spec-helper';

import { CountDownTimerComponent } from './count-down-timer.component';
import { TimerComponent } from './timer/timer.component';

describe('CountDownTimerComponent', () => {
  let component: CountDownTimerComponent;
  let fixture: ComponentFixture<CountDownTimerComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownTimerComponent, FakeTimerComponent ],
      schemas: [NO_ERRORS_SCHEMA]
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

  it('has initial text - without utility', () => {
    const toggleBtn = debugElement.query(By.css('[data-testid="toggle-button"]'));
    const actualText = toggleBtn.nativeElement.textContent.trim();
    const expectedText = 'Resume';

    expect(actualText).withContext('Initial button text does not match').toBe(expectedText);
  });

  it('has initial text- with utility', () => {
    const toggleBtnId = 'toggle-button';
    const expectedText = 'Resume'
    expectText(fixture, toggleBtnId, expectedText);
  });

  it('renders timer component - without utility', () => {
    const timerEl = debugElement.query(By.directive(FakeTimerComponent));
    const timerComponent: TimerComponent = timerEl.componentInstance;
    expect(timerComponent).toBeTruthy();
  });

  // it('renders the timer component - with utility', () => {
  //   const timerComponent = findComponent(fixture, 'app-timer');
  //   expect(timerComponent).withContext('Child component not found').toBeTruthy();
  // });

  it('passes a start time limit - without utility', () => {
    const timerEl = debugElement.query(By.directive(FakeTimerComponent));
    const timerComponent: TimerComponent = timerEl.componentInstance;
    expect(timerComponent.timeLimit).withContext('Starting value is not 10').toBe(0);
  });

  // it('passes a start time limit - with utility', () => {
  //   const timerComponent = findComponent(fixture, 'app-timer');
  //   expect(timerComponent.properties['timeLimit']).withContext('Starting value is not 10').toBe(0);
  // });

  it('passes a starting status - without utility', () => {
    const timerEl = debugElement.query(By.directive(FakeTimerComponent));
    const timerComponent: TimerComponent = timerEl.componentInstance;
    expect(timerComponent.status).withContext('starting status not "PAUSE"').toBe('PAUSE');
  });

  // it('passes a start status - with utility', () => {
  //   const selector = 'app-timer';
  //   const timerComponent = findComponent(fixture, selector);
  //   expect(timerComponent.properties['status']).withContext('starting status not "PAUSE"').toBe('PAUSE')
  // });

  describe('timer has ended', () => {
    let timerEl: DebugElement;
    let timerComponent: TimerComponent;

    beforeEach(() => {
      timerEl = debugElement.query(By.directive(FakeTimerComponent));
      timerComponent = timerEl.componentInstance;
      spyOn(component, 'timerEndedAlert');
      timerComponent.timerEnded.emit('ended');
    });

    it('listens for timer end event - without utility', () => {

      expect(component.timerEndedAlert).withContext('timerEndedAlert was not called').toHaveBeenCalledTimes(1);
    });

    it('resets the status to "PAUSE"', () => {
      
      expect(timerComponent.status).withContext('Error in timer end').toBe('PAUSE');
    });

    it('resets the timeLimit property to zero', () => {

      expect(timerComponent.timeLimit).withContext('timeLimit is not correct').toBe(0);
    });
  });

  // it('listens for timer end event - with utility', () => {
  //   const selector = 'app-timer';
  //   const timerComponent = findComponent(fixture, selector);
  //   spyOn(component, 'timerEndedAlert');
  //   timerComponent.triggerEventHandler('timerEnded','ended');
  //   expect(component.timerEndedAlert).withContext('timerEndedAlert was not called').toHaveBeenCalledTimes(1);
  // });
});

@Component({
  selector: 'app-timer',
  template: ''
})
class FakeTimerComponent implements Partial<TimerComponent> {
  @Input()
  timeLimit?: number | undefined;

  @Input()
  status?: string | undefined;

  @Output()
  public timerEnded = new EventEmitter<string>();
}