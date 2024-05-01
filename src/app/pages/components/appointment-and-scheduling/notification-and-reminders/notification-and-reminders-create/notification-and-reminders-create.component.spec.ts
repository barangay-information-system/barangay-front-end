import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationAndRemindersCreateComponent } from './notification-and-reminders-create.component';

describe('NotificationAndRemindersCreateComponent', () => {
  let component: NotificationAndRemindersCreateComponent;
  let fixture: ComponentFixture<NotificationAndRemindersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationAndRemindersCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationAndRemindersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
