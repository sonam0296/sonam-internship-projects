import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from "./auth-guard.service";
import { canDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorComponent } from './error/error.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]},
    {path: 'servers', 
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent, children:[
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [canDeactivateGuard]},
      {path: ':id', component: ServerComponent}]},
    // {path: 'not-found', component: PageNotFoundComponent},
    {path: 'not-found', component: ErrorComponent, data: {message: 'Page Not Found'}},
    {path: '**', redirectTo: '/not-found'}
  ];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModel{}