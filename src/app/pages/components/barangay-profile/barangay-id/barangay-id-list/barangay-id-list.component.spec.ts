import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangayIdListComponent } from './barangay-id-list.component';

describe('BarangayIdListComponent', () => {
  let component: BarangayIdListComponent;
  let fixture: ComponentFixture<BarangayIdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarangayIdListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarangayIdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
