import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxPayerAddressComponent } from './tax-payer-address.component';

describe('TaxPayerAddressComponent', () => {
  let component: TaxPayerAddressComponent;
  let fixture: ComponentFixture<TaxPayerAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxPayerAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxPayerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
