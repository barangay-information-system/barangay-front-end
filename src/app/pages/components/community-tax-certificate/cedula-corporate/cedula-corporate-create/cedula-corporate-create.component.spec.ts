import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedulaCorporateCreateComponent } from './cedula-corporate-create.component';

describe('CedulaCorporateCreateComponent', () => {
  let component: CedulaCorporateCreateComponent;
  let fixture: ComponentFixture<CedulaCorporateCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CedulaCorporateCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CedulaCorporateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
