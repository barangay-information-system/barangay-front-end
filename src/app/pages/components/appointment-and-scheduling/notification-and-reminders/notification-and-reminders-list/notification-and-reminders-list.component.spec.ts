import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationAndRemindersListComponent } from './notification-and-reminders-list.component';

describe('NotificationAndRemindersListComponent', () => {
  let component: NotificationAndRemindersListComponent;
  let fixture: ComponentFixture<NotificationAndRemindersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationAndRemindersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationAndRemindersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
