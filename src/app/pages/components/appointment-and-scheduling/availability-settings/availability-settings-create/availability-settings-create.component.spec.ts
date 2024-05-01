import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilitySettingsCreateComponent } from './availability-settings-create.component';

describe('AvailabilitySettingsCreateComponent', () => {
  let component: AvailabilitySettingsCreateComponent;
  let fixture: ComponentFixture<AvailabilitySettingsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailabilitySettingsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailabilitySettingsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
