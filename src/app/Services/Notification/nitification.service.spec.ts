import { TestBed } from '@angular/core/testing';

import { NitificationService } from './nitification.service';

describe('NitificationService', () => {
  let service: NitificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NitificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
