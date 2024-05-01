import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangaySetupCreateComponent } from './barangay-setup-create.component';

describe('BarangaySetupCreateComponent', () => {
  let component: BarangaySetupCreateComponent;
  let fixture: ComponentFixture<BarangaySetupCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarangaySetupCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarangaySetupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
