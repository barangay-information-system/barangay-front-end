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
import { BarangayComplaintRoutingModule } from './barangagy-complaint-routing.module';
import { BlotterListComponent } from './blotter/blotter-list/blotter-list.component';
import { BlotterCreateComponent } from './blotter/blotter-create/blotter-create.component';
import { SummonListComponent } from './summon/summon-list/summon-list.component';
import { SummonCreateComponent } from './summon/summon-create/summon-create.component';
import { HearingListComponent } from './hearing/hearing-list/hearing-list.component';
import { HearingCreateComponent } from './hearing/hearing-create/hearing-create.component';
import { SettlementListComponent } from './settlement/settlement-list/settlement-list.component';
import { SettlementCreateComponent } from './settlement/settlement-create/settlement-create.component';
import { CaseFilingListComponent } from './case-filing/case-filing-list/case-filing-list.component';
import { CaseFilingCreateComponent } from './case-filing/case-filing-create/case-filing-create.component';
import { ProtectionOrderListComponent } from './protection-order/protection-order-list/protection-order-list.component';
import { ProtectionOrderCreateComponent } from './protection-order/protection-order-create/protection-order-create.component';
@NgModule({
    declarations: [
        BlotterListComponent,
        BlotterCreateComponent,

        SummonListComponent,
        SummonCreateComponent,

        HearingListComponent,
        HearingCreateComponent,

        SettlementListComponent,
        SettlementCreateComponent,

        CaseFilingListComponent,
        CaseFilingCreateComponent,

        ProtectionOrderListComponent,
        ProtectionOrderCreateComponent,
       
    ],
    imports: [
        BarangayComplaintRoutingModule,
        

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
export class BarangayComplaintModule {}
