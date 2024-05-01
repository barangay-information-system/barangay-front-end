import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-quick-sign-up',
    templateUrl: './quick-sign-up.component.html',
    styleUrl: './quick-sign-up.component.scss',
})
export class QuickSignUpComponent implements OnInit {
    signUp = this.userService.form;

    constructor(
        private userService: UserService,
        private messageService: MessageService,
        private router: Router,
    ) {}

    ngOnInit(): void {}

    submit() {
        if (this.signUp.value.emp_id === '') {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Employee Number field should not be blank.',
            });
            return;
        }
        if (this.signUp.value.username === '') {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Username field should not be blank.',
            });
            return;
        }
        if (this.signUp.value.password === '') {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Password field should not be blank.',
            });
            return;
        }
        if (this.signUp.value.mobile_email === '') {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Mobile or Number field should not be blank.',
            });
            return;
        }

        this.userService.create().subscribe((result) => {
            const { data }: any = result;
            
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
                detail: 'User successfully added!',
            });

            setTimeout(() => {
              this.router.navigate(['/login']);
          }, 1500);
        });
    }
}
