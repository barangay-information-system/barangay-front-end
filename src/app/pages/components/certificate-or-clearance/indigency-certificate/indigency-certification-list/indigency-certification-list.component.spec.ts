import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndigencyCertificationListComponent } from './indigency-certification-list.component';

describe('IndigencyCertificationListComponent', () => {
  let component: IndigencyCertificationListComponent;
  let fixture: ComponentFixture<IndigencyCertificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndigencyCertificationListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndigencyCertificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
