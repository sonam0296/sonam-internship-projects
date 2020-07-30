import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'edit/:userId', component: EditUserComponent },
  { path: 'view/:userId', component: ViewUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
