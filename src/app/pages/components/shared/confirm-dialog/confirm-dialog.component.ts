import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrl: './confirm-dialog.component.scss',
    // providers: [DialogService],
})
export class ConfirmDialogComponent {
    constructor(
        public ref: DynamicDialogRef,
        public confirmationService: ConfirmationService
    ) {}

    closeDialog(data) {
        this.ref.close(data);
    }

    confirm() {
        this.confirmationService.confirm({
            header: 'Are you sure?',
            message: 'Please confirm to proceed.',
            accept: () => {
                // this.messageService.add({
                //     severity: 'info',
                //     summary: 'Confirmed',
                //     detail: 'You have accepted',
                //     life: 3000,
                // });
                console.log('yes');
            },
            reject: () => {
                // this.messageService.add({
                //     severity: 'error',
                //     summary: 'Rejected',
                //     detail: 'You have rejected',
                //     life: 3000,
                // });
                console.log('no');
            },
        });
    }
}
