import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangayOfficialsListComponent } from './barangay-officials-list.component';

describe('BarangayOfficialsListComponent', () => {
  let component: BarangayOfficialsListComponent;
  let fixture: ComponentFixture<BarangayOfficialsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarangayOfficialsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarangayOfficialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
