import { TestBed } from '@angular/core/testing';

import { FetchContentService } from './fetch-content.service';

describe('FetchContentService', () => {
  let service: FetchContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
