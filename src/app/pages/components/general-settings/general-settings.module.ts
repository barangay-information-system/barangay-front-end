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
import { GeneralSettingsRoutingModule } from './general-settings-routing.module';
import { BarangaySetupListComponent } from './barangay-setup/barangay-setup-list/barangay-setup-list.component';
import { BarangaySetupCreateComponent } from './barangay-setup/barangay-setup-create/barangay-setup-create.component';
import { BarangayOfficialsListComponent } from './barangay-officials/barangay-officials-list/barangay-officials-list.component';
import { BarangayOfficialsCreateComponent } from './barangay-officials/barangay-officials-create/barangay-officials-create.component';
import { PurokSetupListComponent } from './purok-setup/purok-setup-list/purok-setup-list.component';
import { PurokSetupCreateComponent } from './purok-setup/purok-setup-create/purok-setup-create.component';
import { PositionSetupListComponent } from './position-setup/position-setup-list/position-setup-list.component';
import { PositionSetupCreateComponent } from './position-setup/position-setup-create/position-setup-create.component';
import { EmployeeSetupListComponent } from './employee-setup/employee-setup-list/employee-setup-list.component';
import { EmployeeSetupCreateComponent } from './employee-setup/employee-setup-create/employee-setup-create.component';

@NgModule({
    declarations: [
        BarangaySetupListComponent,
        BarangaySetupCreateComponent,

        BarangayOfficialsListComponent,
        BarangayOfficialsCreateComponent,
        
        PurokSetupListComponent,
        PurokSetupCreateComponent,

        PositionSetupListComponent,
        PositionSetupCreateComponent,

        EmployeeSetupListComponent,
        EmployeeSetupCreateComponent,
    ],
    imports: [
        GeneralSettingsRoutingModule,
        

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
export class GeneralSettingsModule {}
