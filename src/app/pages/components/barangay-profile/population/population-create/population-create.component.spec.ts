import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationCreateComponent } from './population-create.component';

describe('PopulationCreateComponent', () => {
  let component: PopulationCreateComponent;
  let fixture: ComponentFixture<PopulationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopulationCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopulationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
