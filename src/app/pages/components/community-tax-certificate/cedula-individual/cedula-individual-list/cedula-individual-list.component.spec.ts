import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedulaIndividualListComponent } from './cedula-individual-list.component';

describe('CedulaIndividualListComponent', () => {
  let component: CedulaIndividualListComponent;
  let fixture: ComponentFixture<CedulaIndividualListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CedulaIndividualListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CedulaIndividualListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
