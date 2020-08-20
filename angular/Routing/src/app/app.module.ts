import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModel } from "./app-routing.module";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';
import { ServersService } from './servers/servers.service';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanComponentDeactivate } from "./servers/edit-server/can-deactivate-guard.service";
import { canDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorComponent } from './error/error.component';
import { ServerResolver } from "./servers/server/server-resolver.service";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    ServerComponent,
    EditServerComponent,
    UserComponent,
    PageNotFoundComponent,
    ErrorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModel
  ],
  providers: [ServersService, AuthService, AuthGuard, canDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

// {path: '**', redirectTo: '/not-found'}
// always put this at the last of all the appRoutes. else every page will show page not found