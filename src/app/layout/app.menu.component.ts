import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    {
                        label: 'Dashboards',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/'],
                        disabled: true,
                    },
                ],
            },
            {
                label: 'Barangay Profile',
                items: [
                    {
                        label: 'Resident',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/barangay-profile/resident/resident-list'],
                        disabled: true,
                    },
                    {
                        label: 'Household',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/barangay-profile/household/household-list'],
                        disabled: true,
                    },
                    {
                        label: 'Establishment',
                        icon: 'pi pi-fw pi-building',
                        routerLink: ['/barangay-profile/establishment/establishment-list'],
                        disabled: true,
                    },
                    {
                        label: 'Barangay ID',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['/barangay-profile/barangay-id/barangay-id-list'],
                        disabled: true,
                    },
                    {
                        label: 'Population',
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['/barangay-profile/population/population-list'],
                        disabled: true,
                    },
                ],
            },
            {
                label: 'Barangay Complaint',
                items: [
                    {
                        label: 'Blotter',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/barangay-complaint/blotter/blotter-list'],
                        disabled: true,
                    },
                    {
                        label: 'Summon',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/barangay-complaint/summon/summon-list'],
                        disabled: true,
                    },
                    {
                        label: 'Hearing',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/barangay-complaint/hearing/hearing-list'],
                        disabled: true,
                    },
                    {
                        label: 'Settlement',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/barangay-complaint/settlement/settlement-list'],
                        disabled: true,
                    },
                    {
                        label: 'Case Filing',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/barangay-complaint/case-filing/case-filing-list'],
                        disabled: true,
                    },
                    {
                        label: 'Protection Order',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/barangay-complaint/protection-order/protection-order-list'],
                        disabled: true,
                    },
                ],
            },
            {
                label: 'Certificate or Clearances',
                items: [
                    {
                        label: 'Barangay Clearance',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/certificate-or-clearance/barangay-clearance/barangay-clearance-list'],
                        disabled: true,
                    },
                    {
                        label: 'Business Clearance',
                        icon: 'pi pi-fw pi-credit-card',
                        routerLink: ['/certificate-or-clearance/business-clearance/business-clearance-list'],
                        disabled: true,
                    },
                    {
                        label: 'Indigency Certificate',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/certificate-or-clearance/indigency-certificate/indigency-certificate-list'],
                        disabled: true,
                    },
                    {
                        label: 'Residency Certificate',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/certificate-or-clearance/residency-certificate/residency-certificate-list'],
                        disabled: true,
                    },
                    {
                        label: 'Character Certification',
                        icon: 'pi pi-fw pi-money-bill',
                        routerLink: ['/certificate-or-clearance/character-certification/character-certification-list'],
                        disabled: true,
                    },
                ],
            },
            {
                label: 'Community Tax Certificate',
                items: [
                    {
                        label: 'CEDULA Individual',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/community-tax-certificate/cedula-individual/cedula-individual-list'],
                        disabled: true,
                    },
                    {
                        label: 'CEDULA Corporate',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/community-tax-certificate/cedula-corporate/cedula-corporate-list'],
                        disabled: true,
                    },
                ],
            },
            {
                label: 'Appointment and Scheduling',
                items: [
                    {
                        label: 'Manage Appointment',
                        icon: 'pi pi-fw pi-briefcase',
                        routerLink: ['appointment-and-scheduling/manage-appointment/manage-appointment-list'],
                        disabled: true,
                    },
                    {
                        label: 'Schedule Availablity',
                        icon: 'pi pi-fw pi-briefcase',
                        routerLink: ['appointment-and-scheduling/schedule-availability/schedule-availability-list'],
                        disabled: true,
                    },
                    {
                        label: 'Notification and Reminders',
                        icon: 'pi pi-fw pi-briefcase',
                        routerLink: ['appointment-and-scheduling/notification-and-reminders/notification-and-reminders-list'],
                        disabled: true,
                    },
                    {
                        label: 'Availability Settings',
                        icon: 'pi pi-fw pi-briefcase',
                        routerLink: ['appointment-and-scheduling/availability-settings/availability-settings-list'],
                        disabled: true,
                    },
                    {
                        label: 'Cancelling and Rescheduling',
                        icon: 'pi pi-fw pi-briefcase',
                        routerLink: ['appointment-and-scheduling/cancelling-and-rescheduling/cancelling-and-rescheduling-list'],
                        disabled: true,
                    },
                ],
            },
            {
                label: 'General Settings',
                items: [
                    {
                        label: 'Barangay Setup',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/general-settings/barangay-setup/barangay-setup-list'],
                        disabled: true,
                    },
                    {
                        label: 'Barangay Officials',
                        icon: 'pi pi-fw pi-sitemap',
                        routerLink: ['/general-settings/barangay-officials/barangay-officials-list'],
                        disabled: true,
                    },
                    {
                        label: 'Purok Setup',
                        icon: 'pi pi-fw pi-directions',
                        routerLink: ['/general-settings/purok-setup/purok-setup-list'],
                        disabled: true,
                    },
                    {
                        label: 'Position Setup',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/general-settings/position-setup/position-setup-list'],
                        disabled: true,
                    },
                    {
                        label: 'Employee Setup',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/general-settings/employee-setup/employee-setup-list'],
                        disabled: true,
                    },
                ],
            },
            {
                label: 'User Management',
                items: [
                    {
                        label: 'User Account List',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/user-setting/user-list'],
                        disabled: true,
                    },
                    // {
                    //     label: 'User Role List',
                    //     icon: 'pi pi-fw pi-align-justify',
                    //     routerLink: ['/user-setting/user-role-list'],
                    //     disabled: true,
                    // },
                    // {
                    //     label: 'User Form List',
                    //     icon: 'pi pi-fw pi-file-edit',
                    //     routerLink: ['/user-setting/user-form-list'],
                    //     disabled: true,
                    // },
                ],
            },
        ];
    }
}
