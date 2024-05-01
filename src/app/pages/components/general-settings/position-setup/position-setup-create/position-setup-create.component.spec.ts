import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionSetupCreateComponent } from './position-setup-create.component';

describe('PositionSetupCreateComponent', () => {
  let component: PositionSetupCreateComponent;
  let fixture: ComponentFixture<PositionSetupCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionSetupCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PositionSetupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
