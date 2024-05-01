import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFilingListComponent } from './case-filing-list.component';

describe('CaseFilingListComponent', () => {
  let component: CaseFilingListComponent;
  let fixture: ComponentFixture<CaseFilingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseFilingListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaseFilingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
