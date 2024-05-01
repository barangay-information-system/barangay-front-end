import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCertificationListComponent } from './character-certification-list.component';

describe('CharacterCertificationListComponent', () => {
  let component: CharacterCertificationListComponent;
  let fixture: ComponentFixture<CharacterCertificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCertificationListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterCertificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
