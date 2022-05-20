import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ContentData } from 'src/app/interfaces/content-data';
import { ContentResponse } from 'src/app/interfaces/content-response';
import { FetchContentService } from './fetch-content.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {
  showBottomSheet: boolean;

  bottomSheetContent$: Observable<Array<ContentData>>;
  constructor(private fetchContentService: FetchContentService) {
    this.showBottomSheet = false;
    this.bottomSheetContent$ = this.fetchContentService.fetchContent().pipe(
      map(res => res.result)
    );
  }

  ngOnInit(): void {
  }

  toggleBottomSheet(): void {
    this.showBottomSheet = !this.showBottomSheet;
  }

}
