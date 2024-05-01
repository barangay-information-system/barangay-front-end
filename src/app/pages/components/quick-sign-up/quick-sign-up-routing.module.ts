import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuickSignUpComponent } from './quick-sign-up.component';

const routes: Routes = [
    { path: '', component: QuickSignUpComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuickSignUpRoutingModule { }
