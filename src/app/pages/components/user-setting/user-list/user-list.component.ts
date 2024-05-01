import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { UserService } from 'src/app/pages/service/user.service';
import { UserCreateComponent } from '../user-create/user-create.component';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
    dataSource: any[] = [];

    loading: boolean = false;

    filterFields = ['emp_id','username', 'fullname', 'type', 'position', 'office'];

    constructor(
        private userService: UserService,
        public dialogService: DialogService,
        public messageService: MessageService
    ) {}

    ref: DynamicDialogRef | undefined;

    ngOnInit(): void {
        this.getList();
    }

    getList() {
        this.userService.getUserData();
        this.userService.users.subscribe((result) => {
            this.dataSource = result;
            console.log(result);
        });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }

    editUser(user: any) {
        console.log(user);
        this.userService.form.patchValue(user);
        console.log(this.userService.form.value);
        this.show('Update');
    }
    removeUser(user: any) {
        console.log(user);
    }

    show(header: string) {
        this.ref = this.dialogService.open(UserCreateComponent, {
            header: header + ' User',
            width: '45vw',
            contentStyle: { overflow: 'auto' },
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw',
            },
            closable: false,
        });
        this.ref.onClose.subscribe((data: any) => {
            if (!data) {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Information',
                    detail: data.summary,
                    life: 1500,
                });
                return;
            }
            this.getList();
        });
    }
}
