import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangayClearanceCreateComponent } from './barangay-clearance-create.component';

describe('BarangayClearanceCreateComponent', () => {
  let component: BarangayClearanceCreateComponent;
  let fixture: ComponentFixture<BarangayClearanceCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarangayClearanceCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarangayClearanceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
