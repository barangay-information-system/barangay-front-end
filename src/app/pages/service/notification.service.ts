import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpRequestService } from './http-request.service';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmDialogComponent } from '../components/shared/confirm-dialog/confirm-dialog.component';

@Injectable({
    providedIn: 'root',
    
})
export class NotificationService {
    ref: DynamicDialogRef | undefined;
    constructor(
        private messageService: MessageService,
        public dialogService: DialogService
    ) {}

    show() {
        this.messageService.add({
            severity: 'warn',
            summary: 'Information',
            detail: 'This feature is not yet implemented.',
        });
    }

    showMessageBox() {
        this.ref = this.dialogService.open(ConfirmDialogComponent, {
            // header: 'Select a Product',
            width: '20vw',
            contentStyle: { overflow: 'auto' },
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
            closable: false,
            // templates: {
            //     footer: Footer
            // }
        });

        this.ref.onClose.subscribe((data: any) => {
            let summary_and_detail;
            if (data) {
                const buttonType = data?.buttonType;
                summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data?.name };
            } else {
                summary_and_detail = { summary: 'No Product Selected', detail: 'Pressed Close button' };
            }
            this.messageService.add({ severity: 'info', ...summary_and_detail, life: 3000 });
        });

        this.ref.onMaximize.subscribe((value) => {
            this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
        });
    }
}
