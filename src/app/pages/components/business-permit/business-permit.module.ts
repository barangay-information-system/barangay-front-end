import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { OverlayModule } from 'primeng/overlay';
import { FormsModule, ReactiveFormsModule, NgControl } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { BusinessPermitRoutingModule } from './business-permit-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { BusinessPermitListComponent } from './business-permit-list/business-permit-list.component';
import { BusinessPermitCreateComponent } from './business-permit-create/business-permit-create.component';
import { InputTextModule } from 'primeng/inputtext';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { BusinessInformationComponent } from './components/business-information/business-information.component';
import { TaxPayerInformationComponent } from './components/tax-payer-information/tax-payer-information.component';
import { TaxPayerAddressComponent } from './components/tax-payer-address/tax-payer-address.component';
import { BusinessAddressComponent } from './components/business-address/business-address.component';
import { BusinessOperationComponent } from './components/business-operation/business-operation.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { LineBusinessComponent } from './components/line-business/line-business.component';
import { DocumentRequirementsComponent } from './components/document-requirements/document-requirements.component';
import { MeasurePaxComponent } from './components/measure-pax/measure-pax.component';

import { FileUploadModule } from 'primeng/fileupload';
import { BusinessRetirementListComponent } from './business-retirement-list/business-retirement-list.component';
import { BusinessRetirementCreateComponent } from './business-retirement-create/business-retirement-create.component';
import { BusinessIssuanceListComponent } from './business-issuance-list/business-issuance-list.component';
import { BusinessIssuanceCreateComponent } from './business-issuance-create/business-issuance-create.component';
import { BusinessAssessmentListComponent } from './business-assessment-list/business-assessment-list.component';
import { BusinessAssessmentCreateComponent } from './business-assessment-create/business-assessment-create.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { ExistingBusinessListComponent } from '../shared/existing-business-list/existing-business-list.component';
import { InputMaskModule } from 'primeng/inputmask';
import { LookUpLineBusinessComponent } from '../shared/look-up-line-business/look-up-line-business.component';
import { LookUpMeasurePaxComponent } from '../shared/look-up-measure-pax/look-up-measure-pax.component';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { ToastModule } from 'primeng/toast';
@NgModule({
    declarations: [
        BusinessPermitCreateComponent,
        BusinessPermitListComponent,
        BusinessInformationComponent,
        TaxPayerInformationComponent,
        TaxPayerAddressComponent,
        BusinessAddressComponent,
        BusinessOperationComponent,
        LineBusinessComponent,
        DocumentRequirementsComponent,
        MeasurePaxComponent,

        BusinessRetirementListComponent,
        BusinessRetirementCreateComponent,

        BusinessIssuanceListComponent,
        BusinessIssuanceCreateComponent,

        BusinessAssessmentListComponent,
        BusinessAssessmentCreateComponent,

        ExistingBusinessListComponent,
        LookUpLineBusinessComponent,
        LookUpMeasurePaxComponent,
        ConfirmDialogComponent
    ],
    imports: [
        BusinessPermitRoutingModule,

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
export class BusinessPermitModule {}
