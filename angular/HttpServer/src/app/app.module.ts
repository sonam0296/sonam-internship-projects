import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from "./auth-interceptors.service";
import { LoggingInterceptorService } from "./logging-interceptors.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
     useClass: AuthInterceptorService, 
     multi: true},
     {provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService, 
      multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
