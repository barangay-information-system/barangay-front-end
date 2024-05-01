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
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileUploadModule } from 'primeng/fileupload';
import { InputGroupModule } from 'primeng/inputgroup';
import { ExistingBusinessListComponent } from '../shared/existing-business-list/existing-business-list.component';
import { InputMaskModule } from 'primeng/inputmask';
import { SetupRoutingModule } from './setup-routing.module';
import { DocumentRequirementsListComponent } from './document-requirements/document-requirements-list/document-requirements-list.component';
import { DocumentRequirementsCreateComponent } from './document-requirements/document-requirements-create/document-requirements-create.component';
import { MeasurementPaxListComponent } from './measurement-pax/measurement-pax-list/measurement-pax-list.component';
import { MeasurementPaxCreateComponent } from './measurement-pax/measurement-pax-create/measurement-pax-create.component';
import { LineBusinessListComponent } from './line-business/line-business-list/line-business-list.component';
import { LineBusinessCreateComponent } from './line-business/line-business-create/line-business-create.component';
@NgModule({
    declarations: [
        DocumentRequirementsListComponent,
        DocumentRequirementsCreateComponent,
        MeasurementPaxListComponent,
        MeasurementPaxCreateComponent,
        LineBusinessListComponent,
        LineBusinessCreateComponent
    ],
    imports: [
        SetupRoutingModule,

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
        InputMaskModule
    ],
    providers: [DialogService, MessageService],
})
export class SetupModule {}
