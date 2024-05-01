import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentRequirementsListComponent } from './document-requirements/document-requirements-list/document-requirements-list.component';
import { DocumentRequirementsCreateComponent } from './document-requirements/document-requirements-create/document-requirements-create.component';
import { MeasurementPaxListComponent } from './measurement-pax/measurement-pax-list/measurement-pax-list.component';
import { MeasurementPaxCreateComponent } from './measurement-pax/measurement-pax-create/measurement-pax-create.component';
import { LineBusinessListComponent } from './line-business/line-business-list/line-business-list.component';
import { LineBusinessCreateComponent } from './line-business/line-business-create/line-business-create.component';

const routes: Routes = [
	{ path: 'document-requirements-list', component: DocumentRequirementsListComponent },
	{ path: 'document-requirements-create', component: DocumentRequirementsCreateComponent },
	{ path: 'measurement-pax-list', component: MeasurementPaxListComponent },
	{ path: 'measurement-pax-create', component: MeasurementPaxCreateComponent },
	{ path: 'line-business-list', component: LineBusinessListComponent },
	{ path: 'line-business-create', component: LineBusinessCreateComponent },
];



@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class SetupRoutingModule { }
