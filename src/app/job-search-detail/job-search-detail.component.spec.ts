import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSearchDetailComponent } from './job-search-detail.component';

describe('ListJobDetailComponent', () => {
  let component: JobSearchDetailComponent;
  let fixture: ComponentFixture<JobSearchDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSearchDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobSearchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
