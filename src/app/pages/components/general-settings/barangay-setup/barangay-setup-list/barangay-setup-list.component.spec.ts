import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangaySetupListComponent } from './barangay-setup-list.component';

describe('BarangaySetupListComponent', () => {
  let component: BarangaySetupListComponent;
  let fixture: ComponentFixture<BarangaySetupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarangaySetupListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarangaySetupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
