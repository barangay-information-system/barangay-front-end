import { Component, Input, OnInit, input } from '@angular/core';
import {
    DialogService,
    DynamicDialogComponent,
    DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { IUserRole } from 'src/app/pages/models/user-role';
import { FormService, btnSelector } from 'src/app/pages/service/form.service';
import { UserRoleService } from 'src/app/pages/service/user-role.service';

@Component({
    selector: 'app-user-role-create',
    templateUrl: './user-role-create.component.html',
    styleUrl: './user-role-create.component.scss',
})
export class UserRoleCreateComponent implements OnInit {
    @Input() data: any;
    form = this.roleService.form;
    setActionSelector = btnSelector.CREATE;

    dataSource: IUserRole[] = [];

    instance: DynamicDialogComponent | undefined;
    loading: boolean = false;

    constructor(
        public ref: DynamicDialogRef,
        public dialogService: DialogService,
        private roleService: UserRoleService,
        private formService: FormService
    ) {}

    ngOnInit(): void {
        this.formService.selected.subscribe((result) => {
            this.setActionSelector = result;
        });
    }

    save() {
        this.setActionSelector === btnSelector.CREATE
            ? this.create()
            : this.update();
    }

    create() {
        this.form.markAllAsTouched();

        this.roleService.create().subscribe((result) => {
            setTimeout(() => {
                this.close();
            }, 1000);
        });
    }
    update() {
        this.form.markAllAsTouched();

        this.roleService.update().subscribe((result) => {
            setTimeout(() => {
                this.close();
            }, 1000);
        });
    }
    close() {
        const object = {
            buttonType: this.setActionSelector,
            summary: 'Successfully ' + this.setActionSelector,
        };
        this.ref.close(object);
    }
}
