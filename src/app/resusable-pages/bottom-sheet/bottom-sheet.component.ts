import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';
import { ContentResponse } from 'src/app/interfaces/content-response';

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
        animate('200ms ease-out')
      ]),
      transition('opened => closed', [
        animate('350ms ease-in')
      ])
    ]),
    trigger('bottomSheetOverlayLoad', [
      state('closed', style({
        backgroundColor: 'rgb(0, 0, 0, 0)'
      })),
      state('opened', style({
        backgroundColor: 'rgb(0, 0, 0, 0.5)'
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
export class BottomSheetComponent implements AfterViewInit {
  @Input() bottomSheetContent: any = null;
  @Output() bottomSheetClosed = new EventEmitter();
  pageState = 'closed';
  constructor() { }

  ngAfterViewInit(): void {
    // Triggers the opening animation after a delay
    setTimeout(() => {
      this.pageState = 'opened';
    }, 200)
  }

  closePage(): void {
    // Set the animation state to 'closed' to trigger closing animation
    this.pageState = 'closed';
  }

  onAnimationEvent(event: AnimationEvent): void {
    if (event.fromState === 'opened' && event.toState === 'closed') {
      this.bottomSheetClosed.emit('closed'); // Sends a 'closed' event to the parent to hide the component
    }
  }

}
