import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { OverlayModule } from 'primeng/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';

import { FileUploadModule } from 'primeng/fileupload';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { AppointmentAndSchedulingRoutingModule } from './appointment-and-scheduling-routing.module';
import { ManageAppointmentListComponent } from './manage-appointment/manage-appointment-list/manage-appointment-list.component';
import { ManageAppointmentCreateComponent } from './manage-appointment/manage-appointment-create/manage-appointment-create.component';
import { ScheduleAvailabilityListComponent } from './schedule-availability/schedule-availability-list/schedule-availability-list.component';
import { ScheduleAvailabilityCreateComponent } from './schedule-availability/schedule-availability-create/schedule-availability-create.component';
import { NotificationAndRemindersListComponent } from './notification-and-reminders/notification-and-reminders-list/notification-and-reminders-list.component';
import { NotificationAndRemindersCreateComponent } from './notification-and-reminders/notification-and-reminders-create/notification-and-reminders-create.component';
import { AvailabilitySettingsListComponent } from './availability-settings/availability-settings-list/availability-settings-list.component';
import { AvailabilitySettingsCreateComponent } from './availability-settings/availability-settings-create/availability-settings-create.component';
import { CancellingAndReschedulingListComponent } from './cancelling-and-rescheduling/cancelling-and-rescheduling-list/cancelling-and-rescheduling-list.component';
import { CancellingAndReschedulingCreateComponent } from './cancelling-and-rescheduling/cancelling-and-rescheduling-create/cancelling-and-rescheduling-create.component';

@NgModule({
    declarations: [
        ManageAppointmentListComponent,
        ManageAppointmentCreateComponent,

        ScheduleAvailabilityListComponent,
        ScheduleAvailabilityCreateComponent,

        NotificationAndRemindersListComponent,
        NotificationAndRemindersCreateComponent,

        AvailabilitySettingsListComponent,
        AvailabilitySettingsCreateComponent,

        CancellingAndReschedulingListComponent,
        CancellingAndReschedulingCreateComponent,
       
    ],
    imports: [
        AppointmentAndSchedulingRoutingModule,
        

        CommonModule,
        OverlayModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        ReactiveFormsModule,
        TabViewModule,
        InputTextModule,
        PanelModule,
        CardModule,
        DropdownModule,
        RadioButtonModule,
        CalendarModule,
        InputNumberModule,
        MultiSelectModule,
        FileUploadModule,
        InputGroupModule,
        InputMaskModule,
        ToastModule
    ],
    providers: [DialogService, MessageService, ConfirmationService],
})
export class AppointmentAndSchedulingModule {}
