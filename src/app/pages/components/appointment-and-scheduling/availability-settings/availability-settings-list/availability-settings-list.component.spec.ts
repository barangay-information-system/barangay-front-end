import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilitySettingsListComponent } from './availability-settings-list.component';

describe('AvailabilitySettingsListComponent', () => {
  let component: AvailabilitySettingsListComponent;
  let fixture: ComponentFixture<AvailabilitySettingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailabilitySettingsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailabilitySettingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
