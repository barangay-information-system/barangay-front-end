import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangayOfficialsCreateComponent } from './barangay-officials-create.component';

describe('BarangayOfficialsCreateComponent', () => {
  let component: BarangayOfficialsCreateComponent;
  let fixture: ComponentFixture<BarangayOfficialsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarangayOfficialsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarangayOfficialsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
