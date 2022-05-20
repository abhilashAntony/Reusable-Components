import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentResponse } from 'src/app/interfaces/content-response';

@Injectable({
  providedIn: 'root'
})
export class FetchContentService {

  constructor(private http: HttpClient) { }

  fetchContent(): Observable<ContentResponse> {
    return this.http.get<ContentResponse>('../../../assets/resources/content-page.json');
  }
}
