import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlotterListComponent } from './blotter-list.component';

describe('BlotterListComponent', () => {
  let component: BlotterListComponent;
  let fixture: ComponentFixture<BlotterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlotterListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlotterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
