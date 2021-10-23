import { TestBed } from '@angular/core/testing';

import { LoaderServeService } from './loader-serve.service';

describe('LoaderServeService', () => {
  let service: LoaderServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
