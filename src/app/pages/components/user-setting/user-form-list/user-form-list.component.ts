import { Component, OnInit } from '@angular/core';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserFormCreateComponent } from '../user-form-create/user-form-create.component';
import { MessageService } from 'primeng/api';
@Component({
    selector: 'app-user-form-list',
    templateUrl: './user-form-list.component.html',
    styleUrl: './user-form-list.component.scss',
})
export class UserFormListComponent implements OnInit {
    dataSource: any[] = [];

    loading: boolean = false;

    constructor(
        public dialogService: DialogService,
        public messageService: MessageService
    ) {}

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }

    ref: DynamicDialogRef | undefined;

    show() {
        this.ref = this.dialogService.open(UserFormCreateComponent, {
            header: 'Create new Form',
            width: '45vw',
            contentStyle: { overflow: 'none' },
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw',
            },
            templates: {
                // footer: FooterComponent,
            },
        });

        this.ref.onClose.subscribe((data: any) => {
            console.log(data);
            // let summary_and_detail;
            // if (data) {
            //     const buttonType = data?.buttonType;
            //     summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data?.name };
            // } else {
            //     summary_and_detail = { summary: 'No Product Selected', detail: 'Pressed Close button' };
            // }
            // this.messageService.add({ severity: 'info', ...summary_and_detail, life: 3000 });
        });

        this.ref.onMaximize.subscribe((value) => {
            this.messageService.add({
                severity: 'info',
                summary: 'Maximized',
                detail: `maximized: ${value.maximized}`,
            });
        });
    }
}
