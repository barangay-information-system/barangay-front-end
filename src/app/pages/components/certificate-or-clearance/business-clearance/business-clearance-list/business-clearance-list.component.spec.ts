import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessClearanceListComponent } from './business-clearance-list.component';

describe('BusinessClearanceListComponent', () => {
  let component: BusinessClearanceListComponent;
  let fixture: ComponentFixture<BusinessClearanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessClearanceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessClearanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
