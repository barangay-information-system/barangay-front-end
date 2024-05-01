import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CedulaIndividualListComponent } from './cedula-individual/cedula-individual-list/cedula-individual-list.component';
import { CedulaIndividualCreateComponent } from './cedula-individual/cedula-individual-create/cedula-individual-create.component';
import { CedulaCorporateCreateComponent } from './cedula-corporate/cedula-corporate-create/cedula-corporate-create.component';
import { CedulaCorporateListComponent } from './cedula-corporate/cedula-corporate-list/cedula-corporate-list.component';

const routes: Routes = [
    {
        path: 'cedula-individual/cedula-individual-list',
        component: CedulaIndividualListComponent,
    },
    {
        path: 'cedula-individual/cedula-individual-create',
        component: CedulaIndividualCreateComponent,
    },
    {
        path: 'cedula-corporate/cedula-corporate-list',
        component: CedulaCorporateListComponent,
    },
    {
        path: 'cedula-corporate/cedula-corporate-create',
        component: CedulaCorporateCreateComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CommunityTaxCertificateRoutingModule {}
