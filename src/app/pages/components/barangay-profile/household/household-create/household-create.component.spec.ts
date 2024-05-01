import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdCreateComponent } from './household-create.component';

describe('HouseholdCreateComponent', () => {
  let component: HouseholdCreateComponent;
  let fixture: ComponentFixture<HouseholdCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseholdCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HouseholdCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
