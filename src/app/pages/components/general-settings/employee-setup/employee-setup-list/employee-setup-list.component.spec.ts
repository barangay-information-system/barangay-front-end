import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSetupListComponent } from './employee-setup-list.component';

describe('EmployeeSetupListComponent', () => {
  let component: EmployeeSetupListComponent;
  let fixture: ComponentFixture<EmployeeSetupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSetupListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeSetupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
