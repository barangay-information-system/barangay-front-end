import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarangayClearanceListComponent } from './barangay-clearance/barangay-clearance-list/barangay-clearance-list.component';
import { BarangayClearanceCreateComponent } from './barangay-clearance/barangay-clearance-create/barangay-clearance-create.component';
import { BusinessClearanceListComponent } from './business-clearance/business-clearance-list/business-clearance-list.component';
import { BusinessClearanceCreateComponent } from './business-clearance/business-clearance-create/business-clearance-create.component';
import { CharacterCertificationListComponent } from './character-certification/character-certification-list/character-certification-list.component';
import { CharacterCertificationCreateComponent } from './character-certification/character-certification-create/character-certification-create.component';
import { IndigencyCertificationListComponent } from './indigency-certificate/indigency-certification-list/indigency-certification-list.component';
import { IndigencyCertificationCreateComponent } from './indigency-certificate/indigency-certification-create/indigency-certification-create.component';
import { ResidencyCertificateListComponent } from './residency-certificate/residency-certificate-list/residency-certificate-list.component';
import { ResidencyCertificateCreateComponent } from './residency-certificate/residency-certificate-create/residency-certificate-create.component';

const routes: Routes = [
	{ path: 'barangay-clearance/barangay-clearance-list', component: BarangayClearanceListComponent },
	{ path: 'barangay-clearance/barangay-clearance-create', component: BarangayClearanceCreateComponent },
	{ path: 'business-clearance/business-clearance-list', component: BusinessClearanceListComponent },
	{ path: 'business-clearance/business-clearance-create', component: BusinessClearanceCreateComponent },
	{ path: 'character-certification/character-certification-list', component: CharacterCertificationListComponent },
	{ path: 'character-certification/character-certification-create', component: CharacterCertificationCreateComponent },
	{ path: 'indigency-certificate/indigency-certificate-list', component: IndigencyCertificationListComponent },
	{ path: 'indigency-certificate/indigency-certificate-create', component: IndigencyCertificationCreateComponent },
	{ path: 'residency-certificate/residency-certificate-list', component: ResidencyCertificateListComponent },
	{ path: 'residency-certificate/residency-certificate-create', component: ResidencyCertificateCreateComponent },

	
];



@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class CertificateOrClearanceRoutingModule { }
