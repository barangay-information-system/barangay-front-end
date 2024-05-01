import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import {
    EmployeeModel,
    IEmployee,
} from 'src/app/pages/models/general/employee';
import { AuthService } from 'src/app/pages/service/auth.service';
import { EmployeeService } from 'src/app/pages/service/employee.service';
import { NotificationService } from 'src/app/pages/service/notification.service';
import { UserService } from 'src/app/pages/service/user.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit {
    employee: IEmployee = new EmployeeModel();
    datepipe: DatePipe = new DatePipe('en-US');
    user: any;

    form = this.fb.group({
        password: ['', [Validators.required]],
        reTypePassword: ['', [Validators.required]],
    });

    // dob = new Date();
    constructor(
        private notifService: NotificationService,
        private employeeService: EmployeeService,
        private datePipe: DatePipe,
        private userService: UserService,
        private fb: FormBuilder,
        private messageService: MessageService,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.loadEmployeeData();
        this.loadUserData();
    }

    loadUserData() {
        const id = localStorage.getItem('pkid');
        console.log(id);
        this.userService.getUser(id).subscribe((result) => {
            const { data }: any = result;
            this.user = data;

            console.log(this.user);
        });
    }

    loadEmployeeData() {
        const id = localStorage.getItem('employeeId');
        this.employeeService.getDataById(id).subscribe((result) => {
            const { data }: any = result;
            this.employee = data;
            // this.employee.dob = this.datePipe.transform(this.employee.dob, 'yyyy-MM-dd');
            // this.dob = this.formatDate(this.employee.dob);
        });
    }

    //   formatDate(value: any): Date {
    //     // return this.datepipe.transform(value, 'MM/dd/yyyy') || new Date;
    //   }

    update() {
        this.notifService.show();
    }

    sameToPassWord(value: string) {
        return value === this.form.value.password;
    }

    changePassword() {
        if (!this.form.valid) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Warning',
                detail: 'Required fields needed.',
            });
            return;
        }
        if (!this.sameToPassWord(this.form.value.reTypePassword)) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Warning',
                detail: 'Password is not matched!',
            });
            return;
        }

        var payload = {
            id: localStorage.getItem('pkid'),
            password: this.form.value.password,
        };
        this.authService.changePassword(payload).subscribe((data) => {
            this.messageService.add({
                severity: 'success',
                summary: 'Information',
                detail: 'Password successfully changed!',
                
            });

            this.form.reset();
        });
    }
}
