import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { BusinessInformationService } from 'src/app/pages/service/business-permit/business-information.service';
import { IBusinessInformation } from 'src/app/pages/models/business-permit/business-information';
import { ApplicationTypeService } from 'src/app/pages/service/statuses/type-of-applications.service';
import { ITypeApplication } from 'src/app/pages/models/statuses/type-of-application';
import { ApplicationStatusService } from 'src/app/pages/service/statuses/status-of-application';
import { IStatusApplication } from 'src/app/pages/models/statuses/status-of-application';
import { TypeBusinessService } from 'src/app/pages/service/statuses/type-of-business.service';
import { ITypeBusiness } from 'src/app/pages/models/statuses/type-of-business';
import { ModeOfPaymentService } from 'src/app/pages/service/statuses/mode-of-payment.service';
import { IModeOfPayment } from 'src/app/pages/models/statuses/mode-of-payment';
import { ApplicationDetailsServices } from 'src/app/pages/service/business-permit/application-details.service';
import { IApplicationDetails } from 'src/app/pages/models/business-permit/application-details';
import { Enums } from 'src/app/pages/enums/enums';
import { FormArray, FormBuilder } from '@angular/forms';
import { NotificationService } from 'src/app/pages/service/notification.service';

@Component({
    selector: 'app-business-permit-list',
    templateUrl: './business-permit-list.component.html',
})
export class BusinessPermitListComponent implements OnInit {
    dataSource: IApplicationDetails[] = [];
    rangeDates: Date[] | undefined;
    enums: Enums = new Enums();
    gender = [
        {
            name: 'Male',
            key: 'Male',
        },
        {
            name: 'Female',
            key: 'Female',
        },
    ];

    filterFields = [
        'business_information.business_id_no',
        'business_information.business_name',
        'application_type.permit_type',
        'application_status.application_type',
        'business_information.owner_taxpayer_information.full_name',
        'business_information.owner_taxpayer_information.gender',
    ];

    loading: boolean = false;
    types!: ITypeApplication[];
    statuses!: IStatusApplication[];
    organizations: ITypeBusiness[] = [];
    modeOfPayments: IModeOfPayment[] = [];

    constructor(
        public dialogService: DialogService,
        public messageService: MessageService,
        private router: Router,
        public businessInfoService: BusinessInformationService,
        public typeService: ApplicationTypeService,
        public statusService: ApplicationStatusService,
        public organizationService: TypeBusinessService,
        private paymentService: ModeOfPaymentService,
        private adService: ApplicationDetailsServices,
        private fb: FormBuilder,
        public notifService: NotificationService
    ) {}

    ngOnInit(): void {
        this.loadData();

        this.loadType();

        this.loadStatus();

        this.loadOrganizationType();

        this.loadPayment();
    }

    loadData() {
        this.adService.getData();
        this.adService.data.subscribe((result) => {
            this.dataSource = result;
            console.log(result);
        });
    }

    loadType() {
        this.typeService.getData();
        this.typeService.data_types_application.subscribe((result) => {
            this.types = result.filter((type) => type.group === 'Application');
        });
    }
    loadStatus() {
        this.statusService.getData();
        this.statusService.data_status.subscribe((result) => {
            this.statuses = result;
        });
    }
    loadOrganizationType() {
        this.organizationService.getData();
        this.organizationService.data_types_business.subscribe((result) => {
            this.organizations = result;
        });
    }

    loadPayment() {
        this.paymentService.getData();
        this.paymentService.data_payments.subscribe((result) => {
            this.modeOfPayments = result;
        });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }
    onDateFilter() {
        const filteredData = this.dataSource.filter((item) => {
            const date = new Date(item?.created_at);
            return date >= this.rangeDates[0] && date <= this.rangeDates[1];
        });
        this.dataSource = filteredData;
    }

    create() {
        // this.router.navigate(['/business-permit/business-permit-create']);
        this.notifService.showMessageBox();
    }
    editPermit(item: any) {
        this.adService.form.patchValue({
            id: item.id,
            tax_year: new Date(item.tax_year),
            application_process: item.application_process,
            application_status: item.application_status,
            application_type: item.application_type,
            mode_payment: item.mode_payment,

            business: item.business,
            owner_taxpayer_information:
                item.business.owner_taxpayer_information,
            business_operation: item.business.business_operation,
        });
        const lineBusinessesArray = this.adService.form.get(
            'line_businesses'
        ) as FormArray;
        item.business.line_businesses.forEach((item: any) => {
            lineBusinessesArray.push(this.fb.group(item));
        });

        const measurePaxArray = this.adService.form.get(
            'measure_paxes'
        ) as FormArray;
        item.business.measure_paxes.forEach((item: any) => {
            measurePaxArray.push(this.fb.group(item));
        });
        
        this.router.navigate(['/business-permit/business-permit-create']);
    }
    deletePermit(item: IBusinessInformation) {}
}
