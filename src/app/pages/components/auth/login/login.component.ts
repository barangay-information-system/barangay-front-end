import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastTemplates } from 'primeng/toast';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/pages/service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class LoginComponent {
    valCheck: string[] = ['remember'];

    password: any;
    user: any;
    pass: any;
    token: any;
    loginForm = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
        rememberMe: [true],
    });
    constructor(
        public layoutService: LayoutService,
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        if (this.authService.isUserLoggedIn()) {
            this.router.navigate(['']);
        }
    }
    login() {
        if (this.loginForm.value.username === '') {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Username field should not be blank.',
            });
            return;
        }

        if (this.loginForm.value.password === '') {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Password field should not be blank.',
            });
            return;
        }


        console.log(this.loginForm.value);

        this.authService.login(this.loginForm.value).subscribe((result) => {
            const { data }: any = result;
            console.log(data);
            if (typeof data === 'string') {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: data,
                });
                return;
            }

            this.token = data.token;
            this.authService.setSession(data);

            setTimeout(() => {
                this.router.navigate(['']);
            }, 1500);
        });
    }
}
