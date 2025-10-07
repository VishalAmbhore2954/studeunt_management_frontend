import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLogsComponent } from './student-logs.component';

describe('StudentLogsComponent', () => {
  let component: StudentLogsComponent;
  let fixture: ComponentFixture<StudentLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
