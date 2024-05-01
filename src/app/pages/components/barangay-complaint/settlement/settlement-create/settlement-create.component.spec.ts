import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementCreateComponent } from './settlement-create.component';

describe('SettlementCreateComponent', () => {
  let component: SettlementCreateComponent;
  let fixture: ComponentFixture<SettlementCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettlementCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettlementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
