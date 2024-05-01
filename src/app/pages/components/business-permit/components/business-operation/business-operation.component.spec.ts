import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessOperationComponent } from './business-operation.component';

describe('BusinessOperationComponent', () => {
  let component: BusinessOperationComponent;
  let fixture: ComponentFixture<BusinessOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessOperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
