import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessPermitListComponent } from './business-permit-list/business-permit-list.component';
import { BusinessPermitCreateComponent } from './business-permit-create/business-permit-create.component';
import { BusinessRetirementListComponent } from './business-retirement-list/business-retirement-list.component';
import { BusinessRetirementCreateComponent } from './business-retirement-create/business-retirement-create.component';
import { BusinessIssuanceListComponent } from './business-issuance-list/business-issuance-list.component';
import { BusinessIssuanceCreateComponent } from './business-issuance-create/business-issuance-create.component';
import { BusinessAssessmentListComponent } from './business-assessment-list/business-assessment-list.component';
import { BusinessAssessmentCreateComponent } from './business-assessment-create/business-assessment-create.component';

const routes: Routes = [
	{ path: 'business-permit-list', component: BusinessPermitListComponent },
	{ path: 'business-permit-create', component: BusinessPermitCreateComponent },
	{ path: 'business-retirement-list', component: BusinessRetirementListComponent },
	{ path: 'business-retirement-create', component: BusinessRetirementCreateComponent },
	{ path: 'business-issuance-list', component: BusinessIssuanceListComponent },
	{ path: 'business-issuance-create', component: BusinessIssuanceCreateComponent },
	{ path: 'business-assessment-list', component: BusinessAssessmentListComponent },
	{ path: 'business-assessment-create', component: BusinessAssessmentCreateComponent },
];



@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class BusinessPermitRoutingModule { }
