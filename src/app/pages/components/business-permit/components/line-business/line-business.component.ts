import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BusinessInformationService } from 'src/app/pages/service/business-permit/business-information.service';
import { LookUpLineBusinessComponent } from '../../../shared/look-up-line-business/look-up-line-business.component';
import { FormArray, FormBuilder } from '@angular/forms';
import { ApplicationDetailsServices } from 'src/app/pages/service/business-permit/application-details.service';

@Component({
    selector: 'app-line-business',
    templateUrl: './line-business.component.html',
    styleUrl: './line-business.component.scss',
})
export class LineBusinessComponent implements OnInit {
    // form = this.biService.form;

    ref: DynamicDialogRef | undefined;
    loading = false;
    filterFields = [];
    ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }

    constructor(
        public biService: BusinessInformationService,
        private dialogService: DialogService,
        public adService: ApplicationDetailsServices
    ) {}
    remove(index: number) {
        (this.adService.form.get('line_businesses') as FormArray).removeAt(
            index
        );
    }

    showModal() {
        this.ref = this.dialogService.open(LookUpLineBusinessComponent, {
            header: 'Add Line Business',
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
}
