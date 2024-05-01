import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
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
import { UserSettingRoutingModule } from './user-setting-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormListComponent } from './user-form-list/user-form-list.component';
import { UserRoleListComponent } from './user-role-list/user-role-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ImageModule } from 'primeng/image';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserFormCreateComponent } from './user-form-create/user-form-create.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { UserRoleCreateComponent } from './user-role-create/user-role-create.component';
import { DialogService } from 'primeng/dynamicdialog';
import { NotificationService } from '../../service/notification.service';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
    declarations: [
        UserListComponent,
        UserFormListComponent,
        UserRoleListComponent,
        UserProfileComponent,

        UserCreateComponent,
        UserFormCreateComponent,
        UserRoleCreateComponent,
    ],
    imports: [
        UserSettingRoutingModule,

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
        InputTextModule,
        PanelModule,
        DropdownModule,
        InputTextareaModule,
        ImageModule,
        PanelModule,
        ToastModule,
        PasswordModule,
        CalendarModule,
    ],
    providers: [MessageService, DialogService, NotificationService, DatePipe],
})
export class UserSettingModule {}
