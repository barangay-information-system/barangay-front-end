import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import {
    ILineBusiness,
    LineBusinessModel,
} from 'src/app/pages/models/requirements/line-business';
import {
    ITypeApplication,
    TypeApplicationModel,
} from 'src/app/pages/models/statuses/type-of-application';
import { ApplicationDetailsServices } from 'src/app/pages/service/business-permit/application-details.service';
import { BusinessInformationService } from 'src/app/pages/service/business-permit/business-information.service';
import { btnSelector } from 'src/app/pages/service/form.service';
import { LineBusinessService } from 'src/app/pages/service/line-business.service';
import { ApplicationTypeService } from 'src/app/pages/service/statuses/type-of-applications.service';

@Component({
    selector: 'app-look-up-line-business',
    templateUrl: './look-up-line-business.component.html',
    styleUrl: './look-up-line-business.component.scss',
})
export class LookUpLineBusinessComponent implements OnInit {
    // parentForm = this.biService.form;
    setActionSelector = btnSelector.CREATE;
    applicationTypes: ITypeApplication[] = [];

    form = this.fb.group({
        line_business: [new LineBusinessModel()],
        application_type: [new TypeApplicationModel()],
        units: ['', Validators.required],
        capital_investments: ['', Validators.required],
        essentials: ['', Validators.required],
        non_essentials: ['', Validators.required],
    });
    resetForm = this.fb.group({
        line_business: [new LineBusinessModel()],
        application_type: [new TypeApplicationModel()],
        units: ['', Validators.required],
        capital_investments: ['', Validators.required],
        essentials: ['', Validators.required],
        non_essentials: ['', Validators.required],
    });

    line_businesses: ILineBusiness[] = [];

    constructor(
        private fb: FormBuilder,
        public biService: BusinessInformationService,
        public ref: DynamicDialogRef,
        public lbService: LineBusinessService,
        public atService: ApplicationTypeService,
        public adService: ApplicationDetailsServices
    ) {}
    ngOnInit(): void {
        this.loadData();
        this.loadType();
    }
    loadData() {
        this.lbService.getData();
        this.lbService.data.subscribe((result) => {
            this.line_businesses = result;
        });
    }

    loadType() {
        this.atService.getData();
        this.atService.data_types_application.subscribe((result) => {
            this.applicationTypes = result.filter(
                (type) => type.group === 'Application'
            );
        });
    }

    add() {
        if (!this.form.valid) {
            return;
        }
        const copy = this.fb.group(this.form.value);

        (this.adService.form.get('line_businesses') as FormArray).push(copy);

        this.form.reset(this.resetForm.value);
    }
    close() {
        const object = {
            buttonType: this.setActionSelector,
            summary: 'Successfully ' + this.setActionSelector,
        };

        this.ref.close(object);
    }
}
