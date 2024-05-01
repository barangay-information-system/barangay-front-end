import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangayIdCreateComponent } from './barangay-id-create.component';

describe('BarangayIdCreateComponent', () => {
  let component: BarangayIdCreateComponent;
  let fixture: ComponentFixture<BarangayIdCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarangayIdCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarangayIdCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
