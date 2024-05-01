import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurokSetupCreateComponent } from './purok-setup-create.component';

describe('PurokSetupCreateComponent', () => {
  let component: PurokSetupCreateComponent;
  let fixture: ComponentFixture<PurokSetupCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurokSetupCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurokSetupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
