import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurokSetupListComponent } from './purok-setup-list.component';

describe('PurokSetupListComponent', () => {
  let component: PurokSetupListComponent;
  let fixture: ComponentFixture<PurokSetupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurokSetupListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurokSetupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
