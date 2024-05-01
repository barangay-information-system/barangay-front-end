import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppointmentListComponent } from './manage-appointment-list.component';

describe('ManageAppointmentListComponent', () => {
  let component: ManageAppointmentListComponent;
  let fixture: ComponentFixture<ManageAppointmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAppointmentListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageAppointmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
