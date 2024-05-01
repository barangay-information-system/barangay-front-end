import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BusinessInformationService } from 'src/app/pages/service/business-permit/business-information.service';
import { LookUpMeasurePaxComponent } from '../../../shared/look-up-measure-pax/look-up-measure-pax.component';
import { ApplicationDetailsServices } from 'src/app/pages/service/business-permit/application-details.service';
import { FormArray } from '@angular/forms';

@Component({
    selector: 'app-measure-pax',
    templateUrl: './measure-pax.component.html',
    styleUrl: './measure-pax.component.scss',
})
export class MeasurePaxComponent implements OnInit {
    // form = this.biService.form;

    ref: DynamicDialogRef | undefined;

    loading = false;
    filterFields = [];
    ngOnInit(): void {}

    constructor(
        public biService: BusinessInformationService,
        private dialogService: DialogService,
        public adService: ApplicationDetailsServices
    ) {}

    showModal() {
        this.ref = this.dialogService.open(LookUpMeasurePaxComponent, {
            header: 'Add Measure or Pax',
            width: '40vw',
            // contentStyle: { overflow: 'none' },
            draggable: true,
            closable: false,
        });

        this.ref.onClose.subscribe((data: any) => {
            if (data) {
            } else {
                console.log('else');
            }
        });
    }
    remove(index: number) {
        (this.adService.form.get('measure_paxes') as FormArray).removeAt(index);
    }
}
