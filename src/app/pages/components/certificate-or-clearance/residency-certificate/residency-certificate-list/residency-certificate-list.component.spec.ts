import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencyCertificateListComponent } from './residency-certificate-list.component';

describe('ResidencyCertificateListComponent', () => {
  let component: ResidencyCertificateListComponent;
  let fixture: ComponentFixture<ResidencyCertificateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidencyCertificateListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResidencyCertificateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
