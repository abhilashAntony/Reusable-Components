import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent implements OnInit {
  timeLimit = 0;
  status = '';

  inputValue = 0;

  disableResetButton = false;

  constructor() {
  }

  ngOnInit(): void {
    // Sets the initial time-limit and status of the timer
    this.initializeTimer();
  }

  initializeTimer(): void {
    this.timeLimit = 0;
    this.status = 'PAUSE';
  }

  toggleTimer(): void {
    if (this.status === 'PAUSE') { // If the timer is paused, clicking the button will run the timer
      this.status = 'PLAY';
      this.disableResetButton = true;
    } else if (this.status === 'PLAY') { // If the timer is running, clicking the button will pause the timer
      this.status = 'PAUSE';
      this.disableResetButton = false;
    }
  }

  resetTimer(): void {
    this.timeLimit = this.inputValue;
  }

}
