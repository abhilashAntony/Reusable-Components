import { AfterViewInit, Component, OnInit } from '@angular/core';
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
        animate('200ms ease-in')
      ]),
      transition('opened => closed', [
        animate('200ms ease-in')
      ])
    ])
  ]
})
export class BottomSheetComponent implements OnInit, AfterViewInit {
  loadPage = 'closed';
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadPage = 'opened';
    }, 200)
  }

  toggleLoadPage(): void {
    this.loadPage = this.loadPage === 'opened' ? 'closed' : 'opened'
  }

}
