import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSetupCreateComponent } from './employee-setup-create.component';

describe('EmployeeSetupCreateComponent', () => {
  let component: EmployeeSetupCreateComponent;
  let fixture: ComponentFixture<EmployeeSetupCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSetupCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeSetupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
