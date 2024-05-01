import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfBusinessComponent } from './type-of-business.component';

describe('TypeOfBusinessComponent', () => {
  let component: TypeOfBusinessComponent;
  let fixture: ComponentFixture<TypeOfBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeOfBusinessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeOfBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
