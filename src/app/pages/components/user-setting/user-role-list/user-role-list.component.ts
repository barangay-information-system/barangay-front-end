import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserRoleCreateComponent } from '../user-role-create/user-role-create.component';
import { UserRoleService } from 'src/app/pages/service/user-role.service';
import { IUserRole } from 'src/app/pages/models/user-role';
import { FormService, btnSelector } from 'src/app/pages/service/form.service';

@Component({
    selector: 'app-user-role-list',
    templateUrl: './user-role-list.component.html',
    styleUrl: './user-role-list.component.scss',
})
export class UserRoleListComponent implements OnInit {
    dataSource: IUserRole[] = [];

    loading: boolean = false;
    form = this.roleService.form;

    constructor(
        public dialogService: DialogService,
        public messageService: MessageService,
        public roleService: UserRoleService,
        public formService: FormService
    ) {}

    ref: DynamicDialogRef | undefined;

    ngOnInit(): void {
        this.getList();
    }

    getList() {
        this.roleService.getRolesData();
        this.roleService.userRoles.subscribe((result) => {
            this.dataSource = result;
            console.log(this.dataSource);
        });
    }
    show() {
        this.formService.setBtnSelector(btnSelector.CREATE);
        this.ref = this.dialogService.open(UserRoleCreateComponent, {
            header: 'Create New Role',
            width: '50vw',
            contentStyle: { overflow: 'none' },
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw',
            },
        });

        this.ref.onClose.subscribe((data: any) => {
            if (data) {
                const buttonType = data?.buttonType;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Information',
                    detail: data.summary,
                    life: 1500,
                });
            }
        });
        this.getList();
        this.form.reset();
    }

    edit(item: IUserRole) {
        this.show();
        this.formService.setBtnSelector(btnSelector.UPDATE);
        this.roleService.form.patchValue(item);
        // console.log(item);
    }
    remove(item: IUserRole) {
        this.roleService.remove(item).subscribe((result) => {
            const { data }: any = result;
            if (typeof data === 'string') {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: data,
                });
                return;
            }

            setTimeout(() => {
                this.messageService.add({
                    severity: 'info',
                    summary: 'Information',
                    detail: 'Record Successfully removed.',
                });

                this.getList();
            }, 1500);
        });
    }
}
