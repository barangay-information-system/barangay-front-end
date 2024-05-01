import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfApplicationComponent } from './type-of-application.component';

describe('TypeOfApplicationComponent', () => {
  let component: TypeOfApplicationComponent;
  let fixture: ComponentFixture<TypeOfApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeOfApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeOfApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
