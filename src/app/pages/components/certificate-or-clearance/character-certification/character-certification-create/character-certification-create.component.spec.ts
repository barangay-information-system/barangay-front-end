import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCertificationCreateComponent } from './character-certification-create.component';

describe('CharacterCertificationCreateComponent', () => {
  let component: CharacterCertificationCreateComponent;
  let fixture: ComponentFixture<CharacterCertificationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCertificationCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterCertificationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
