import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedulaIndividualCreateComponent } from './cedula-individual-create.component';

describe('CedulaIndividualCreateComponent', () => {
  let component: CedulaIndividualCreateComponent;
  let fixture: ComponentFixture<CedulaIndividualCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CedulaIndividualCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CedulaIndividualCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
