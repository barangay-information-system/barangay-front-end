import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import {
    ILineBusiness,
    LineBusinessModel,
} from 'src/app/pages/models/requirements/line-business';
import {
    IMeasurePax,
    MeasurePaxModel,
} from 'src/app/pages/models/requirements/measure-pax';
import { ApplicationDetailsServices } from 'src/app/pages/service/business-permit/application-details.service';
import { BusinessInformationService } from 'src/app/pages/service/business-permit/business-information.service';
import { btnSelector } from 'src/app/pages/service/form.service';
import { LineBusinessService } from 'src/app/pages/service/line-business.service';
import { MeasurePaxService } from 'src/app/pages/service/measure-pax.service';

@Component({
    selector: 'app-look-up-measure-pax',
    templateUrl: './look-up-measure-pax.component.html',
    styleUrl: './look-up-measure-pax.component.scss',
})
export class LookUpMeasurePaxComponent implements OnInit {
    line_businesses: ILineBusiness[] = [];
    measure_pax: IMeasurePax[] = [];

    // parentForm = this.biService.form;
    setActionSelector = btnSelector.CREATE;

    form = this.fb.group({
        line_business: [new LineBusinessModel()],
        measure_pax: [new MeasurePaxModel()],
        number_units: ['', Validators.required],
        capacity: ['', Validators.required],
    });

    resetForm = this.fb.group({
        line_business: [new LineBusinessModel()],
        measure_pax: [new MeasurePaxModel()],
        number_units: ['', Validators.required],
        capacity: ['', Validators.required],
    });

    constructor(
        private fb: FormBuilder,
        public biService: BusinessInformationService,
        public ref: DynamicDialogRef,
        public lbService: LineBusinessService,
        public mpService: MeasurePaxService,
        public adService: ApplicationDetailsServices
    ) {}

    ngOnInit(): void {
        this.loadLine();
        this.loadMeasure();
    }
    loadLine() {
        this.lbService.getData();
        this.lbService.data.subscribe((result) => {
            this.line_businesses = result;
        });
    }
    loadMeasure() {
        this.mpService.getData();
        this.mpService.data.subscribe((result) => {
            this.measure_pax = result;
        });
    }
    add() {
        if (!this.form.valid) {
            return;
        }
        const copy = this.fb.group(this.form.value);

        (this.adService.form.get('measure_paxes') as FormArray).push(copy);

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
