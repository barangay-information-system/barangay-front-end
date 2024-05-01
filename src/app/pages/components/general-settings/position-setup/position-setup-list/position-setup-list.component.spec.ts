import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionSetupListComponent } from './position-setup-list.component';

describe('PositionSetupListComponent', () => {
  let component: PositionSetupListComponent;
  let fixture: ComponentFixture<PositionSetupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionSetupListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PositionSetupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
