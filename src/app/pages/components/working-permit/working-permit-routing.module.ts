import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkingPermitListComponent } from './working-permit-list/working-permit-list.component';
import { WorkingPermitCreateComponent } from './working-permit-create/working-permit-create.component';


const routes: Routes =[
  { path: 'working-permit-list', component: WorkingPermitListComponent },
  { path: 'working-permit-create', component: WorkingPermitCreateComponent },
 
];

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class WorkingPermitRoutingModule { }
