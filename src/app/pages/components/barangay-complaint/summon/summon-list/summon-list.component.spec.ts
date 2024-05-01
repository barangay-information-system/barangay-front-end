import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonListComponent } from './summon-list.component';

describe('SummonListComponent', () => {
  let component: SummonListComponent;
  let fixture: ComponentFixture<SummonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummonListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
