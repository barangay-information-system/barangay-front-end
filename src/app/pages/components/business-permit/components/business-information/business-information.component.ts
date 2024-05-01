import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ITypeBusiness } from 'src/app/pages/models/statuses/type-of-business';
import { BusinessInformationService } from 'src/app/pages/service/business-permit/business-information.service';
import { TypeBusinessService } from 'src/app/pages/service/statuses/type-of-business.service';
import { ExistingBusinessListComponent } from '../../../shared/existing-business-list/existing-business-list.component';
import { ApplicationDetailsServices } from 'src/app/pages/service/business-permit/application-details.service';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-business-information',
    // standalone: true,
    // imports: [],
    templateUrl: './business-information.component.html',
    styleUrl: './business-information.component.scss',
})
export class BusinessInformationComponent implements OnInit {
    organizations: ITypeBusiness[] = [];

    ref: DynamicDialogRef | undefined;

    form = this.adService.form;
    constructor(
        private organizationService: TypeBusinessService,
        public businessInfoService: BusinessInformationService,
        private dialogService: DialogService,
        public adService: ApplicationDetailsServices,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.getOrganizations();
        // throw new Error('Method not implemented.');
    }

    selectedItem(item: ITypeBusiness) {}

    getOrganizations() {
        this.organizationService.getData();
        this.organizationService.data_types_business.subscribe((result) => {
            this.organizations = result;
        });
    }
    show() {
        this.ref = this.dialogService.open(ExistingBusinessListComponent, {
            header: 'Existing Business',
            width: '60vw',
            height: '30vw',
            contentStyle: { overflow: 'none' },
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw',
            },
            draggable: true,
        });

        this.ref.onClose.subscribe((data: any) => {
            if (data) {
                this.displayData(data);
            } else {
                console.log('else');
            }
        });
    }

    displayData(item: any) {
        console.log(item);
        this.adService.form.patchValue({
            business: {
                id: item.id,
                transaction_no: item.transaction_no,
                business_id_no: item.business_id_no,
                business_name: item.business_name,
                trade_name: item.trade_name,

                type_of_business: item.type_of_business,

                tin_number: item.tin_number,
                dti_sec_registered_date: new Date(item.dti_sec_registered_date),
                dti_sec_registered_no: item.dti_sec_registered_no,
            },
            owner_taxpayer_information: item.owner_taxpayer_information,
            business_operation: item.business_operation,
        });
        const lineBusinessesArray = this.adService.form.get(
            'line_businesses'
        ) as FormArray;
        item.line_businesses.forEach((item: any) => {
            lineBusinessesArray.push(this.fb.group(item));
        });

        const measurePaxArray = this.adService.form.get(
            'measure_paxes'
        ) as FormArray;
        item.measure_paxes.forEach((item: any) => {
            measurePaxArray.push(this.fb.group(item));
        });
    }
}
