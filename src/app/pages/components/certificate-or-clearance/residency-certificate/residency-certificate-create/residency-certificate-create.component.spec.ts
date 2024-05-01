import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencyCertificateCreateComponent } from './residency-certificate-create.component';

describe('ResidencyCertificateCreateComponent', () => {
  let component: ResidencyCertificateCreateComponent;
  let fixture: ComponentFixture<ResidencyCertificateCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidencyCertificateCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResidencyCertificateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
