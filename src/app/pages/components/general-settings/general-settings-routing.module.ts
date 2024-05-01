import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarangaySetupListComponent } from './barangay-setup/barangay-setup-list/barangay-setup-list.component';
import { BarangaySetupCreateComponent } from './barangay-setup/barangay-setup-create/barangay-setup-create.component';
import { BarangayOfficialsListComponent } from './barangay-officials/barangay-officials-list/barangay-officials-list.component';
import { BarangayOfficialsCreateComponent } from './barangay-officials/barangay-officials-create/barangay-officials-create.component';
import { PurokSetupListComponent } from './purok-setup/purok-setup-list/purok-setup-list.component';
import { PurokSetupCreateComponent } from './purok-setup/purok-setup-create/purok-setup-create.component';
import { PositionSetupListComponent } from './position-setup/position-setup-list/position-setup-list.component';
import { PositionSetupCreateComponent } from './position-setup/position-setup-create/position-setup-create.component';
import { EmployeeSetupListComponent } from './employee-setup/employee-setup-list/employee-setup-list.component';
import { EmployeeSetupCreateComponent } from './employee-setup/employee-setup-create/employee-setup-create.component';
const routes: Routes = [
    { path: 'barangay-setup/barangay-setup-list', component: BarangaySetupListComponent },
    { path: 'barangay-setup/barangay-setup-create', component: BarangaySetupCreateComponent },

    { path: 'barangay-officials/barangay-officials-list', component: BarangayOfficialsListComponent },
    { path: 'barangay-officials/barangay-officials-create', component: BarangayOfficialsCreateComponent },

    { path: 'purok-setup/purok-setup-list', component: PurokSetupListComponent },
    { path: 'purok-setup/purok-setup-create', component: PurokSetupCreateComponent },

    { path: 'position-setup/position-setup-list', component: PositionSetupListComponent },
    { path: 'position-setup/position-setup-create', component: PositionSetupCreateComponent },

    { path: 'employee-setup/employee-setup-list', component: EmployeeSetupListComponent },
    { path: 'employee-setup/employee-setup-create', component: EmployeeSetupCreateComponent },
    
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GeneralSettingsRoutingModule {}
