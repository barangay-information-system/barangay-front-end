import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionOrderCreateComponent } from './protection-order-create.component';

describe('ProtectionOrderCreateComponent', () => {
  let component: ProtectionOrderCreateComponent;
  let fixture: ComponentFixture<ProtectionOrderCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectionOrderCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProtectionOrderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
