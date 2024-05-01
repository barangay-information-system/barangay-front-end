import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionOrderListComponent } from './protection-order-list.component';

describe('ProtectionOrderListComponent', () => {
  let component: ProtectionOrderListComponent;
  let fixture: ComponentFixture<ProtectionOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectionOrderListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProtectionOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
