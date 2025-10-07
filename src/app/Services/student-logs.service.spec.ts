import { TestBed } from '@angular/core/testing';

import { StudentLogsService } from './student-logs.service';

describe('StudentLogsService', () => {
  let service: StudentLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
