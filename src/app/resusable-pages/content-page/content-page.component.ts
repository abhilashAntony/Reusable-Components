import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ContentData } from 'src/app/interfaces/content-data';
import { FetchContentService } from './fetch-content.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent {
  showBottomSheet: boolean; // To show or hide the bottom sheet component

  bottomSheetContent$: Observable<Array<ContentData>>; // Content data for the bottom sheet

  constructor(private fetchContentService: FetchContentService) {
    this.showBottomSheet = false;
    this.bottomSheetContent$ = this.fetchContentService.fetchContent().pipe(
      map(res => res.result)
    );
  }

  toggleBottomSheet(): void {
    this.showBottomSheet = !this.showBottomSheet; // Toggle bottom-sheet between show and hide
  }

}
