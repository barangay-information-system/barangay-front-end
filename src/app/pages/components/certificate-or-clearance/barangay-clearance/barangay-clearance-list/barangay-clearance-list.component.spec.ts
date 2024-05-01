import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangayClearanceListComponent } from './barangay-clearance-list.component';

describe('BarangayClearanceListComponent', () => {
  let component: BarangayClearanceListComponent;
  let fixture: ComponentFixture<BarangayClearanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarangayClearanceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarangayClearanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
