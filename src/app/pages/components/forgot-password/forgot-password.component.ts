import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrl: './forgot-password.component.scss',
    providers: [MessageService],
})
export class ForgotPasswordComponent {
    valCheck: string[] = ['remember'];

    password?: string;
    user: any;
    pass: any;
    token: any;
    email: any;
    forgotPasswordForm = this.fb.group({
        emailAddress: ['', [Validators.required]],
    });
    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        // if (this.authService.isUserLoggedIn()) {
        //     this.router.navigate(['']);
        // }
    }
    cancel() {
        this.router.navigate(['/login']);
    }
    reset() {
        if (!this.forgotPasswordForm.valid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Email field is required.',
            });

            return;
        }

        this.authService
            .resetPassword(this.forgotPasswordForm.value.emailAddress)
            .subscribe((result) => {
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
                    severity: 'info',
                    summary: 'Information',
                    detail: 'An email sent to the email provided and will redirect to login page.',
                });
                setTimeout(() => {
                  this.router.navigate(['/login']);
                }, 2000);
            });
    }
}
