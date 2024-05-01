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
import { CertificateOrClearanceRoutingModule } from './certificate-or-clearance-routing.module';
import { BarangayClearanceListComponent } from './barangay-clearance/barangay-clearance-list/barangay-clearance-list.component';
import { BarangayClearanceCreateComponent } from './barangay-clearance/barangay-clearance-create/barangay-clearance-create.component';
import { BusinessClearanceListComponent } from './business-clearance/business-clearance-list/business-clearance-list.component';
import { BusinessClearanceCreateComponent } from './business-clearance/business-clearance-create/business-clearance-create.component';
import { CharacterCertificationListComponent } from './character-certification/character-certification-list/character-certification-list.component';
import { CharacterCertificationCreateComponent } from './character-certification/character-certification-create/character-certification-create.component';
import { IndigencyCertificationListComponent } from './indigency-certificate/indigency-certification-list/indigency-certification-list.component';
import { IndigencyCertificationCreateComponent } from './indigency-certificate/indigency-certification-create/indigency-certification-create.component';
import { ResidencyCertificateListComponent } from './residency-certificate/residency-certificate-list/residency-certificate-list.component';
import { ResidencyCertificateCreateComponent } from './residency-certificate/residency-certificate-create/residency-certificate-create.component';

@NgModule({
    declarations: [
        BarangayClearanceListComponent,
        BarangayClearanceCreateComponent,
        
        BusinessClearanceListComponent,
        BusinessClearanceCreateComponent,

        CharacterCertificationListComponent,
        CharacterCertificationCreateComponent,

        IndigencyCertificationListComponent,
        IndigencyCertificationCreateComponent,

        ResidencyCertificateListComponent,
        ResidencyCertificateCreateComponent,
       
    ],
    imports: [
        CertificateOrClearanceRoutingModule,
        

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
export class CertificateOrClearanceModule {}
