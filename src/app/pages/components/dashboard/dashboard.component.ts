import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Product } from '../../api/product';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {
    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;
    user: any;
    display: boolean = false;
    default_pass: any;
    password: any = '';
    reTypePassword: any = '';

    constructor(
        // private productService: ProductService,
        public layoutService: LayoutService,
        private authService: AuthService,
        private router: Router,
        private userService: UserService,
        private messageService: MessageService
    ) {
        this.subscription = this.layoutService.configUpdate$
            .pipe(debounceTime(25))
            .subscribe((config) => {
                this.initChart();
            });
    }

    ngOnInit() {
        this.showChangePassDialog();

        this.initChart();
        // this.productService
        //     .getProductsSmall()
        //     .then((data) => (this.products = data));
    }
    showChangePassDialog() {
        this.display = localStorage.getItem('isFirstTime') === 'true';
    }
    closeChangePassDialog() {
        this.display = false;
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
        this.authService.changePassword(payload).subscribe((result) => {
            this.messageService.add({
                severity: 'success',
                summary: 'Information',
                detail: 'Password successfully changed!',
                life: 1000,
            });
            setTimeout(() => {
                this.display = false;
                this.messageService.add({
                    severity: 'warn',
                    summary: 'Warning',
                    detail: 'You need to re-login to access.',
                });
            }, 100);
            setTimeout(() => {
                this.authService.logout();
            }, 1500);
            // this.authService.logout();
        });
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue(
            '--text-color-secondary'
        );
        const surfaceBorder =
            documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: [
                'Purok 1',
                'Purok 2',
                'Purok 3',
                'Purok 4',
                'Purok 5',
                'Purok 6',
                'Purok 7',
                'Purok 8',
                'Purok 9',
                'Purok 10',
            ],
            datasets: [
                {
                    label: 'Number of Residents',
                    data: [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
                    fill: false,
                    backgroundColor:
                        documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor:
                        documentStyle.getPropertyValue('--bluegray-700'),
                    tension: 0.4,
                },
                // {
                //     label: 'Num',
                //     data: [28, 48, 40, 19, 86, 27, 90],
                //     fill: false,
                //     backgroundColor:
                //         documentStyle.getPropertyValue('--green-600'),
                //     borderColor: documentStyle.getPropertyValue('--green-600'),
                //     tension: 0.4,
                // },
            ],
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false,
                    },
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false,
                    },
                },
            },
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
