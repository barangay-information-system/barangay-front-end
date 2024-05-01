import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessClearanceCreateComponent } from './business-clearance-create.component';

describe('BusinessClearanceCreateComponent', () => {
  let component: BusinessClearanceCreateComponent;
  let fixture: ComponentFixture<BusinessClearanceCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessClearanceCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessClearanceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
