import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Enums } from 'src/app/pages/enums/enums';
import { IEmployee } from 'src/app/pages/models/general/employee';
import { IUserRole } from 'src/app/pages/models/user-role';
import { AuthService } from 'src/app/pages/service/auth.service';
import { EmployeeService } from 'src/app/pages/service/employee.service';
import { FormService, btnSelector } from 'src/app/pages/service/form.service';
import { UserRoleService } from 'src/app/pages/service/user-role.service';
import { UserService } from 'src/app/pages/service/user.service';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrl: './user-create.component.scss',
})
export class UserCreateComponent implements OnInit {
    form = this.userService.form;
    setActionSelector = btnSelector.CREATE;
    enums = new Enums();
    userRoles: IUserRole[] = [];
    employees: IEmployee[] = [];
    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        public ref: DynamicDialogRef,
        private roleService: UserRoleService,
        private formService: FormService,
        private employeeService: EmployeeService,
    ) {}

    ngOnInit(): void {
        this.loadUserRole();

        this.loadEmployee();

        this.formService.selected.subscribe((result) => {
            this.setActionSelector = result;
        });
    }

    save() {
        console.log(this.form.value);
        this.setActionSelector === btnSelector.CREATE ? this.create() : this.update();
    }

    create() {
        this.form.markAllAsTouched();
        this.userService.create().subscribe((result) => {
            setTimeout(() => {
                this.close();
            }, 1000);
        });
    }
    update() {}
    loadUserRole() {
        this.roleService.getRolesData();
        this.roleService.userRoles.subscribe((result) => {
            this.userRoles = result;
            console.log(this.userRoles);
        });
    }

    loadEmployee(){
        this.employeeService.getData();
        this.employeeService.employees.subscribe((result)=>{
            this.employees = result;
        })
    }

    sameToPassWord(value: string) {
        return value === this.form.value.password;
    }
    selectedRole(item: any){
        console.log(item);
    }
    close() {
        const object = {
            buttonType: this.setActionSelector,
            summary: 'Successfully ' + this.setActionSelector,
        };

        this.ref.close(object);
    }
}
