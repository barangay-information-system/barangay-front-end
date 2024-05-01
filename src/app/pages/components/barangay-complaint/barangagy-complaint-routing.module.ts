import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlotterListComponent } from './blotter/blotter-list/blotter-list.component';
import { BlotterCreateComponent } from './blotter/blotter-create/blotter-create.component';
import { SummonListComponent } from './summon/summon-list/summon-list.component';
import { SummonCreateComponent } from './summon/summon-create/summon-create.component';
import { HearingListComponent } from './hearing/hearing-list/hearing-list.component';
import { HearingCreateComponent } from './hearing/hearing-create/hearing-create.component';
import { CaseFilingListComponent } from './case-filing/case-filing-list/case-filing-list.component';
import { CaseFilingCreateComponent } from './case-filing/case-filing-create/case-filing-create.component';
import { ProtectionOrderListComponent } from './protection-order/protection-order-list/protection-order-list.component';
import { ProtectionOrderCreateComponent } from './protection-order/protection-order-create/protection-order-create.component';
import { SettlementListComponent } from './settlement/settlement-list/settlement-list.component';
import { SettlementCreateComponent } from './settlement/settlement-create/settlement-create.component';

const routes: Routes = [
	{ path: 'blotter/blotter-list', component: BlotterListComponent },
	{ path: 'blotter/blotter-create', component: BlotterCreateComponent },
	{ path: 'summon/summon-list', component: SummonListComponent },
	{ path: 'summon/summon-create', component: SummonCreateComponent },
	{ path: 'hearing/hearing-list', component: HearingListComponent },
	{ path: 'hearing/hearing-create', component: HearingCreateComponent },
	{ path: 'settlement/settlement-list', component: SettlementListComponent },
	{ path: 'settlement/settlement-create', component: SettlementCreateComponent },
	{ path: 'case-filing/case-filing-list', component: CaseFilingListComponent },
	{ path: 'case-filing/case-filing-create', component: CaseFilingCreateComponent },
	{ path: 'protection-order/protection-order-list', component: ProtectionOrderListComponent },
	{ path: 'protection-order/protection-order-create', component: ProtectionOrderCreateComponent },
	
];



@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class BarangayComplaintRoutingModule { }
