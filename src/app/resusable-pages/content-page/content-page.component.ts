import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {
  showBottomSheet: boolean;
  constructor() {
    this.showBottomSheet = false;
  }

  ngOnInit(): void {
  }

  toggleBottomSheet(): void {
    this.showBottomSheet = !this.showBottomSheet;
  }

}
