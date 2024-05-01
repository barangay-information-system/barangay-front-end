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
import { BarangayProfileRoutingModule } from './barangay-profile-routing.module';
import { ResidentListComponent } from './resident/resident-list/resident-list.component';
import { ResidentCreateComponent } from './resident/resident-create/resident-create.component';
import { HouseholdListComponent } from './household/household-list/household-list.component';
import { HouseholdCreateComponent } from './household/household-create/household-create.component';
import { EstablishmentListComponent } from './establishment/establishment-list/establishment-list.component';
import { EstablishmentCreateComponent } from './establishment/establishment-create/establishment-create.component';
import { BarangayIdListComponent } from './barangay-id/barangay-id-list/barangay-id-list.component';
import { BarangayIdCreateComponent } from './barangay-id/barangay-id-create/barangay-id-create.component';
import { PopulationListComponent } from './population/population-list/population-list.component';
import { PopulationCreateComponent } from './population/population-create/population-create.component';
@NgModule({
    declarations: [
        ResidentListComponent,
        ResidentCreateComponent,


        HouseholdListComponent,
        HouseholdCreateComponent,

        EstablishmentListComponent,
        EstablishmentCreateComponent,

        BarangayIdListComponent,
        BarangayIdCreateComponent,

        PopulationListComponent,
        PopulationCreateComponent,
       
    ],
    imports: [
        BarangayProfileRoutingModule,
        

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
export class BarangayProfileModule {}
