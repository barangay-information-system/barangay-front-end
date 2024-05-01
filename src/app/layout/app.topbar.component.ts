import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { AuthService } from '../pages/service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
    items!: MenuItem[];
    menuItems: MenuItem[] = [];

    plainMenuItems: MenuItem[] = [];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    form = this.fb.group({
        password: ['', [Validators.required]],
        reTypePassword: ['', [Validators.required]],
    });

    password: any;
    reTypePassword: any;

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService,
        private fb: FormBuilder
    ) {}
    username!: string;
    language: any;
    haveLoggedIn = false;
    noticeCount: any;

    visible: boolean = false;
    userProfile!: any;

    ngOnInit(): void {
        // this.getUser(localStorage.getItem('token'));

        this.plainMenuItems = [
            {
                label: 'User Profile',
                icon: 'pi pi-fw pi-user',
                command: () => {
                    this.router.navigate(['/user-setting/user-profile']);
                    // this.notYet();
                },
            },
            {
                label: 'Change Password',
                icon: 'pi pi-fw pi-cog',
                command: () => {
                    this.showChangePassDialog();
                },
            },
            {
                label: 'Logout',
                icon: 'pi pi-fw pi-sign-out',
                command: () => {
                    this.handleUserOps('logout');
                },
            },
        ];
    }
    getUser(data: any) {
        if (data) {
            this.username = JSON.stringify(localStorage.getItem('userinfo'));
            this.userProfile = localStorage.getItem('pkid');
            this.haveLoggedIn = true;
        }
    }
    onSearch(event: any) {
        console.log(event);
    }

    handleUserOps(operation: string) {
        switch (operation) {
            case 'logout': {
                this.haveLoggedIn = false;
                this.authService.logout();
                this.router.navigate(['']);
                break;
            }
            default:
                break;
        }
    }

    handleNoticeCount(event: number) {
        this.noticeCount = event;
    }

    notYet() {
        this.messageService.add({
            severity: 'warn',
            summary: 'Information',
            detail: 'This feature is not yet implemented.',
        });
    }

    showChangePassDialog() {
        this.visible = true;
    }
    closeChangePassDialog() {
        this.visible = false;
    }

    sameToPassWord(value: string) {
        return value === this.password;
    }

    changePassword() {
        if (this.password === '' || this.reTypePassword === '') {
            this.messageService.add({
                severity: 'warn',
                summary: 'Warning',
                detail: 'Required fields needed.',
            });
            return;
        }
        if (!this.sameToPassWord(this.reTypePassword)) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Warning',
                detail: 'Password is not matched!',
            });
            return;
        }

        var payload = {
            id: localStorage.getItem('pkid'),
            password: this.password,
        };
        this.authService.changePassword(payload).subscribe((data) => {
            this.messageService.add({
                severity: 'success',
                summary: 'Information',
                detail: 'Password successfully changed!',
            });
        });

        setTimeout(() => {
            this.closeChangePassDialog();
        }, 1500);
    }
}
