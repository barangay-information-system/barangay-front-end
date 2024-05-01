import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Enums } from 'src/app/pages/enums/enums';
import { ResidentService } from 'src/app/pages/service/barangay-profile/resident.service';
import { PurokService } from 'src/app/pages/service/setup/purok.service';

@Component({
    selector: 'app-resident-create',
    templateUrl: './resident-create.component.html',
    styleUrl: './resident-create.component.scss',
})
export class ResidentCreateComponent implements OnInit {
    enums: Enums = new Enums();
    purokDataSource: any[] = [];
    barangay = localStorage.getItem('barangay');

    form = this.residentService.form;

    constructor(
        private purokService: PurokService,
        private residentService: ResidentService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.displayPurok();
        // this.form.setValue({barangay: this.barangay})
    }

    displayPurok() {
        this.purokService.getData();
        this.purokService.data.subscribe((result) => {
            this.purokDataSource = result;
            console.log(this.purokDataSource);
            // console.log(result);
        });
    }

    create() {
        this.form.patchValue({ gender: this.form.value.gender['name'] });
        this.form.patchValue({
            civilStatus: this.form.value.civilStatus['name'],
        });
        this.form.patchValue({
            affiliations: this.form.value.affiliations['name'],
        });

        if (!this.form.valid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Please fill out the fields needed!',
            });
            return;
        }

        this.residentService.create().subscribe((result) => {
            const { data }: any = result;

            console.log(data);

            if (typeof data === 'string') {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: data,
                });
                return;
            }

            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'New resident added!',
            });
        });
    }
}
