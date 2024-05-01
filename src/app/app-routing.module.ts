import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './pages/components/notfound/notfound.component';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import(
                        './pages/components/dashboard/dashboard.module'
                    ).then((m) => m.DashboardModule),
            },
            {
                path: 'barangay-profile',
                loadChildren: () =>
                    import(
                        './pages/components/barangay-profile/barangay-profile.module'
                    ).then((m) => m.BarangayProfileModule),
            },
            {
                path: 'barangay-complaint',
                loadChildren: () =>
                    import(
                        './pages/components/barangay-complaint/barangay-complaint.module'
                    ).then((m) => m.BarangayComplaintModule),
            },
            {
                path: 'certificate-or-clearance',
                loadChildren: () =>
                    import(
                        './pages/components/certificate-or-clearance/certificate-or-clearance.module'
                    ).then((m) => m.CertificateOrClearanceModule),
            },
            {
                path: 'community-tax-certificate',
                loadChildren: () =>
                    import(
                        './pages/components/community-tax-certificate/community-tax-certificate.module'
                    ).then((m) => m.CommunityTaxCertificateModule),
            },
            {
                path: 'appointment-and-scheduling',
                loadChildren: () =>
                    import(
                        './pages/components/appointment-and-scheduling/appointment-and-scheduling.module'
                    ).then((m) => m.AppointmentAndSchedulingModule),
            },
            {
                path: 'general-settings',
                loadChildren: () =>
                    import(
                        './pages/components/general-settings/general-settings.module'
                    ).then((m) => m.GeneralSettingsModule),
            },
            // {
            //     path: '',
            //     loadChildren: () =>
            //         import(
            //             './pages/components/quick-sign-up/quick-sign-up.module'
            //         ).then((m) => m.QuickSignUpModule),
            // },
            // {
            //     path: '',
            //     loadChildren: () =>
            //         import(
            //             './pages/components/forgot-password/forgot-password.module'
            //         ).then((m) => m.ForgotPasswordModule),
            // },










            {
                path: 'business-permit',
                loadChildren: () =>
                    import(
                        './pages/components/business-permit/business-permit.module'
                    ).then((m) => m.BusinessPermitModule),
            },
            {
                path: 'working-permit',
                loadChildren: () =>
                    import(
                        './pages/components/working-permit/working-permit.module'
                    ).then((m) => m.WorkingPermitModule),
            },
            {
                path: 'user-setting',
                loadChildren: () =>
                    import(
                        './pages/components/user-setting/user-setting.module'
                    ).then((m) => m.UserSettingModule),
            },
            {
                path: 'setup',
                loadChildren: () =>
                    import('./pages/components/setup/setup.module').then(
                        (s) => s.SetupModule
                    ),
            },
        ],
    },
    {
        path: '',
        loadChildren: () =>
            import('./pages/components/auth/auth.module').then(
                (m) => m.AuthModule
            ),
    },
    { path: 'notfound', component: NotfoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            onSameUrlNavigation: 'reload',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
