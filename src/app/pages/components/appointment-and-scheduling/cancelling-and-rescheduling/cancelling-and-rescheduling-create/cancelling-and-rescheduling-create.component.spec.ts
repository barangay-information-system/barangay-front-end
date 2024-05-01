import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellingAndReschedulingCreateComponent } from './cancelling-and-rescheduling-create.component';

describe('CancellingAndReschedulingCreateComponent', () => {
  let component: CancellingAndReschedulingCreateComponent;
  let fixture: ComponentFixture<CancellingAndReschedulingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancellingAndReschedulingCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancellingAndReschedulingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
