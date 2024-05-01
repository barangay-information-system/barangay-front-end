import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAvailabilityListComponent } from './schedule-availability-list.component';

describe('ScheduleAvailabilityListComponent', () => {
  let component: ScheduleAvailabilityListComponent;
  let fixture: ComponentFixture<ScheduleAvailabilityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleAvailabilityListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleAvailabilityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
