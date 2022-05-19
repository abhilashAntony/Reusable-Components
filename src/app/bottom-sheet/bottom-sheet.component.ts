import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css'],
  animations: [
    trigger('bottomSheetLoad', [
      state('closed', style({
        transform: 'translate(-50%, 0)'
      })),
      state('opened', style({
        transform: 'translate(-50%, -100%)'
      })),
      transition('closed => opened', [
        animate('250ms ease-out')
      ]),
      transition('opened => closed', [
        animate('350ms ease-in')
      ])
    ])
  ]
})
export class BottomSheetComponent implements OnInit, AfterViewInit {
  @Output() bottomSheetClosed = new EventEmitter();
  pageState = 'closed';
  constructor() { }

  ngOnInit(): void {
    console.log('something')
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.pageState = 'opened';
    }, 200)
  }

  closePage(): void {
    this.pageState = 'closed';
    this.bottomSheetClosed.emit('closed');
  }

}
