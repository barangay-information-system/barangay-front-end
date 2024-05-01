import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentListComponent } from './resident/resident-list/resident-list.component';
import { ResidentCreateComponent } from './resident/resident-create/resident-create.component';
import { HouseholdListComponent } from './household/household-list/household-list.component';
import { HouseholdCreateComponent } from './household/household-create/household-create.component';
import { EstablishmentListComponent } from './establishment/establishment-list/establishment-list.component';
import { EstablishmentCreateComponent } from './establishment/establishment-create/establishment-create.component';
import { BarangayIdListComponent } from './barangay-id/barangay-id-list/barangay-id-list.component';
import { BarangayIdCreateComponent } from './barangay-id/barangay-id-create/barangay-id-create.component';
import { PopulationListComponent } from './population/population-list/population-list.component';
import { PopulationCreateComponent } from './population/population-create/population-create.component';

const routes: Routes = [
    { path: 'resident/resident-list', component: ResidentListComponent },
    { path: 'resident/resident-create', component: ResidentCreateComponent },
    { path: 'household/household-list', component: HouseholdListComponent },
    { path: 'household/household-create', component: HouseholdCreateComponent },
    {
        path: 'establishment/establishment-list',
        component: EstablishmentListComponent,
    },
    {
        path: 'establishment/establishment-create',
        component: EstablishmentCreateComponent,
    },
    {
        path: 'barangay-id/barangay-id-list',
        component: BarangayIdListComponent,
    },
    {
        path: 'barangay-id/barangay-id-create',
        component: BarangayIdCreateComponent,
    },
    { path: 'population/population-list', component: PopulationListComponent },
    {
        path: 'population/population-create',
        component: PopulationCreateComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BarangayProfileRoutingModule {}
