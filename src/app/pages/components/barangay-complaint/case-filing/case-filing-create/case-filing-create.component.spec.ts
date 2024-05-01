import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFilingCreateComponent } from './case-filing-create.component';

describe('CaseFilingCreateComponent', () => {
  let component: CaseFilingCreateComponent;
  let fixture: ComponentFixture<CaseFilingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseFilingCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaseFilingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
