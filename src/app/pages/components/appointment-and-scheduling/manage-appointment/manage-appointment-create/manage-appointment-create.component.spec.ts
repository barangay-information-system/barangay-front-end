import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppointmentCreateComponent } from './manage-appointment-create.component';

describe('ManageAppointmentCreateComponent', () => {
  let component: ManageAppointmentCreateComponent;
  let fixture: ComponentFixture<ManageAppointmentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAppointmentCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageAppointmentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
