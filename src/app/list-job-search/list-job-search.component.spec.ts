import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobSearchComponent } from './list-job-search.component';

describe('ListJobComponent', () => {
  let component: ListJobSearchComponent;
  let fixture: ComponentFixture<ListJobSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListJobSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListJobSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
