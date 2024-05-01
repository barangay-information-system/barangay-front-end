import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedulaCorporateListComponent } from './cedula-corporate-list.component';

describe('CedulaCorporateListComponent', () => {
  let component: CedulaCorporateListComponent;
  let fixture: ComponentFixture<CedulaCorporateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CedulaCorporateListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CedulaCorporateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
