import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Enums } from 'src/app/pages/enums/enums';
import { IApplicationDetails } from 'src/app/pages/models/business-permit/application-details';
import { IStatusApplication } from 'src/app/pages/models/statuses/status-of-application';
import { ITypeApplication } from 'src/app/pages/models/statuses/type-of-application';
import { ITypeBusiness } from 'src/app/pages/models/statuses/type-of-business';
import { ApplicationDetailsServices } from 'src/app/pages/service/business-permit/application-details.service';
import { ApplicationStatusService } from 'src/app/pages/service/statuses/status-of-application';
import { ApplicationTypeService } from 'src/app/pages/service/statuses/type-of-applications.service';
import { TypeBusinessService } from 'src/app/pages/service/statuses/type-of-business.service';

@Component({
    selector: 'app-business-assessment-list',
    templateUrl: './business-assessment-list.component.html',
    styleUrl: './business-assessment-list.component.scss',
})
export class BusinessAssessmentListComponent implements OnInit {
    dataSource: IApplicationDetails[] = [];
    types!: ITypeApplication[];
    organizations!: ITypeBusiness[];
    enums: Enums = new Enums();
    statuses!: IStatusApplication[];
    selectedStatus!: any;

    filterFields = [
        'business_information.business_id_no',
        'business_information.business_name',
        'application_type.permit_type',
        'application_status.application_type',
        'business_information.owner_taxpayer_information.full_name',
    ];

    loading: boolean = false;

    constructor(
        public appDetailsService: ApplicationDetailsServices,
        public typeService: ApplicationTypeService,
        public organizationService: TypeBusinessService,
        public statusService: ApplicationStatusService
    ) {}

    ngOnInit(): void {
        this.loadData();
        this.loadType();
        this.loadOrganizationType();
        this.loadStatus();
    }

    loadType() {
        this.typeService.getData();
        this.typeService.data_types_application.subscribe((result) => {
            this.types = result.filter((type) => type.group === 'Application');
        });
    }
    loadOrganizationType() {
        this.organizationService.getData();
        this.organizationService.data_types_business.subscribe((result) => {
            this.organizations = result;
        });
    }
    loadData() {
        this.appDetailsService.getData();
        this.appDetailsService.data.subscribe((result) => {
            this.dataSource = result.filter(
                (type) =>
                    type.application_status.application_type ===
                    'For Assessment'
            );
        });
    }
    loadStatus() {
        this.statusService.getData();
        this.statusService.data_status.subscribe((result) => {
            this.statuses = result.filter(
                (item) => item.application_type === 'For Assessment'
            );
            this.selectedStatus = this.statuses;
        });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }
}
