import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobSearchDetailComponent } from './list-job-search-detail.component';

describe('ListJobDetailComponent', () => {
  let component: ListJobSearchDetailComponent;
  let fixture: ComponentFixture<ListJobSearchDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListJobSearchDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListJobSearchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
