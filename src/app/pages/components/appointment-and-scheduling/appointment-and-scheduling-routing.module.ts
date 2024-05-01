import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAppointmentListComponent } from './manage-appointment/manage-appointment-list/manage-appointment-list.component';
import { ScheduleAvailabilityListComponent } from './schedule-availability/schedule-availability-list/schedule-availability-list.component';
import { NotificationAndRemindersListComponent } from './notification-and-reminders/notification-and-reminders-list/notification-and-reminders-list.component';
import { AvailabilitySettingsListComponent } from './availability-settings/availability-settings-list/availability-settings-list.component';
import { CancellingAndReschedulingListComponent } from './cancelling-and-rescheduling/cancelling-and-rescheduling-list/cancelling-and-rescheduling-list.component';

const routes: Routes = [
    {
        path: 'manage-appointment/manage-appointment-list',
        component: ManageAppointmentListComponent,
    },
    {
        path: 'schedule-availability/schedule-availability-list',
        component: ScheduleAvailabilityListComponent,
    },
    {
        path: 'notification-and-reminders/notification-and-reminders-list',
        component: NotificationAndRemindersListComponent,
    },
    {
        path: 'availability-settings/availability-settings-list',
        component: AvailabilitySettingsListComponent,
    },
    {
        path: 'cancelling-and-rescheduling/cancelling-and-rescheduling-list',
        component: CancellingAndReschedulingListComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppointmentAndSchedulingRoutingModule {}
