import { TestBed } from '@angular/core/testing';

import { UserReqService } from './user-req.service';

describe('UserReqService', () => {
  let service: UserReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
