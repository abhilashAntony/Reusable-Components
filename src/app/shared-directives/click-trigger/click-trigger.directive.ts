import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickTrigger]'
})
export class ClickTriggerDirective {
  @Output() elementClicked = new EventEmitter();

  @HostListener('click', ['$event'])
  closeBottomSheet(event: Event): void {
    // this.loadPage = 'closed';
    console.log(event.target);
    this.elementClicked.emit('clicked');
  }
  constructor() { }

}
