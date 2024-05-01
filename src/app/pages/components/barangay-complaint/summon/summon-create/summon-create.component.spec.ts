import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonCreateComponent } from './summon-create.component';

describe('SummonCreateComponent', () => {
  let component: SummonCreateComponent;
  let fixture: ComponentFixture<SummonCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummonCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
