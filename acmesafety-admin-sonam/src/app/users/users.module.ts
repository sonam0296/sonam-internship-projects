import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { SharedModule } from '../shared/shared.module';
import { NeedAuthGuard } from '../auth.guard';

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  providers: [NeedAuthGuard],
})
export class UsersModule { }
