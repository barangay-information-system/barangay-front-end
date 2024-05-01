import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAvailabilityCreateComponent } from './schedule-availability-create.component';

describe('ScheduleAvailabilityCreateComponent', () => {
  let component: ScheduleAvailabilityCreateComponent;
  let fixture: ComponentFixture<ScheduleAvailabilityCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleAvailabilityCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleAvailabilityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
