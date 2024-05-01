import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IDocumentRequirements } from 'src/app/pages/models/requirements/document-requirements';
import { IModeOfPayment } from 'src/app/pages/models/statuses/mode-of-payment';
import { ITypeApplication } from 'src/app/pages/models/statuses/type-of-application';
import { BusinessInformationService } from 'src/app/pages/service/business-permit/business-information.service';
import { DocumentRequirementsService } from 'src/app/pages/service/documents-requirements.service';
import { ModeOfPaymentService } from 'src/app/pages/service/statuses/mode-of-payment.service';
import { ApplicationTypeService } from 'src/app/pages/service/statuses/type-of-applications.service';
import { ExistingBusinessListComponent } from '../../shared/existing-business-list/existing-business-list.component';
import { FormArray } from '@angular/forms';
import { ApplicationDetailsServices } from 'src/app/pages/service/business-permit/application-details.service';

@Component({
    selector: 'app-business-permit-create',
    templateUrl: './business-permit-create.component.html',
    styleUrl: './business-permit-create.component.scss',
})
export class BusinessPermitCreateComponent implements OnInit {
    ingredient!: string;
    modeOfPayments: IModeOfPayment[] = [];
    applicationTypes: ITypeApplication[] = [];
    activeIndex: number = 0;
    isPrevLast: boolean = true;
    isNextlast: boolean = false;

    application_status: any = {
        id: '0123abc0-0004-45de-6f67-0000aaaa0001',
        code: 'W',
        application_type: 'Wait List',
        group: 'Application',
    };

    application_process_draft: any = {
        id: '0123abc0-0006-45de-6f67-0000aaaa0004',
        mark_status: 'Draft',
        application_process: 'Draft Application',
    };

    application_process_submit: any = {
        id: '0123abc0-0006-45de-6f67-0000aaaa0005',
        mark_status: 'Submit',
        application_process: 'Submit Application',
    };


    list_of_requirement: IDocumentRequirements[] = [];

    constructor(
        private paymentService: ModeOfPaymentService,
        public businessInfo: BusinessInformationService,
        private appTypeService: ApplicationTypeService,
        public docsService: DocumentRequirementsService,
        public adService: ApplicationDetailsServices
    ) {}

    ngOnInit(): void {
        this.getModeOfPayments();
        this.loadApplicationType();
    }

    getModeOfPayments() {
        this.paymentService.getData();
        this.paymentService.data_payments.subscribe((result) => {
            this.modeOfPayments = result;
        });
    }

    loadApplicationType() {
        this.appTypeService.getData();
        this.appTypeService.data_types_application.subscribe((result) => {
            this.applicationTypes = result.filter(
                (type) => type.group === 'Application'
            );
        });
    }
    onSubmit() {
        this.adService.form.value.application_status = this.application_status;
        this.adService.form.value.application_process =
            this.application_process_draft;

        this.create();

        console.log(this.adService.form.value);
    }

    create() {
        this.adService.create().subscribe((result) => {
            const { data }: any = result;
        });
    }
    reset() {
        // this.businessInfo.form.reset();
    }

    navigate(isForward: boolean) {
        if (isForward) {
            this.activeIndex++;
        } else {
            this.activeIndex--;
        }
        switch (this.activeIndex) {
            case 0: {
                this.isPrevLast = true;
                this.isNextlast = false;
                break;
            }
            case 1: {
                this.isPrevLast = false;
                this.isNextlast = false;
                break;
            }
            case 2: {
                this.isPrevLast = false;
                this.isNextlast = false;
                break;
            }
        }
    }
}
