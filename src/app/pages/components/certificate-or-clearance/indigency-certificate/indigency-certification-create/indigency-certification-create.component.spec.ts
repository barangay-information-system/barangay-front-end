import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndigencyCertificationCreateComponent } from './indigency-certification-create.component';

describe('IndigencyCertificationCreateComponent', () => {
  let component: IndigencyCertificationCreateComponent;
  let fixture: ComponentFixture<IndigencyCertificationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndigencyCertificationCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndigencyCertificationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
