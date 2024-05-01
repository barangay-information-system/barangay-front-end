import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellingAndReschedulingListComponent } from './cancelling-and-rescheduling-list.component';

describe('CancellingAndReschedulingListComponent', () => {
  let component: CancellingAndReschedulingListComponent;
  let fixture: ComponentFixture<CancellingAndReschedulingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancellingAndReschedulingListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancellingAndReschedulingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
