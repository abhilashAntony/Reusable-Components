import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnChanges {
  @Input() timeLimit = 0;
  @Input() status = '';

  @Output() timerEnded = new EventEmitter();
  timerRef: any;
  countDownTime = 0;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('status') && changes['status'].previousValue) {
      if (changes['status'].currentValue === 'PLAY') {
        this.runTimer();
      } else if (changes['status'].currentValue === 'PAUSE') {
        this.pauseTimer();
      }
    }

    if (changes.hasOwnProperty('timeLimit')) {
      if (this.timeLimit >=0 ) {
        this.countDownTime = this.timeLimit;
      }
    }
  }

  runTimer(): void {
    if (this.countDownTime >=0 && this.countDownTime ) { // This check prevents negative timeLimit values
      this.timerRef = setInterval(() => {
        if (this.countDownTime === 0) { // Ensures the timer is cleared when the time reaches zero
          this.timerEnded.emit('ended');
          clearInterval(this.timerRef);
          alert('Timer has ended');
        } else {
          this.countDownTime -= 1;
        }
      }, 1000);
    }
  }

  pauseTimer(): void {
    clearInterval(this.timerRef)
  }

  alertTimerEnd(): void {
    this.timerEnded.emit('ended');
  }

}
