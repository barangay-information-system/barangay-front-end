import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlotterCreateComponent } from './blotter-create.component';

describe('BlotterCreateComponent', () => {
  let component: BlotterCreateComponent;
  let fixture: ComponentFixture<BlotterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlotterCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlotterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
