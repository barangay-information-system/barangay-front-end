import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoleListComponent } from './user-role-list/user-role-list.component';
import { UserFormListComponent } from './user-form-list/user-form-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
    { path: 'user-list', component: UserListComponent },
    { path: 'user-role-list', component: UserRoleListComponent },
    { path: 'user-form-list', component: UserFormListComponent },
    { path: 'user-profile', component: UserProfileComponent },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserSettingRoutingModule {}
