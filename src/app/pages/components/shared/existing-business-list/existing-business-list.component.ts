import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { IApplicationDetails } from 'src/app/pages/models/business-permit/application-details';
import { IBusinessInformation } from 'src/app/pages/models/business-permit/business-information';
import { BusinessInformationService } from 'src/app/pages/service/business-permit/business-information.service';

@Component({
    selector: 'app-existing-business-list',
    templateUrl: './existing-business-list.component.html',
    styleUrl: './existing-business-list.component.scss',
})
export class ExistingBusinessListComponent implements OnInit {
    dataSource: IBusinessInformation[] = [];
    rangeDates: Date[] | undefined;
    selectedItem!: IApplicationDetails;

    filterFields = [
        'business_id_no',
        'business_name',
        'application_type.permit_type',
        'application_status.application_type',
        'owner_taxpayer_information.full_name',
    ];

    loading: boolean = false;

    constructor(
        private businessInfoService: BusinessInformationService,
        public ref: DynamicDialogRef
    ) {}

    ngOnInit(): void {
        this.loadData();
    }

    loadData() {
        this.businessInfoService.getData();
        this.businessInfoService.data.subscribe((result) => {
            this.dataSource = result;
            // console.log(this.dataSource);
        });
    }

    select() {
        this.close();
    }
    close() {
        this.ref.close(this.selectedItem);
    }
}
