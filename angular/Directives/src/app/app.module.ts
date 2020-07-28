import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BasicHighlightDirective } from "./basic-highlight/basic-highlight.directive";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetterHighlightDirective } from './better-highlight.directive';

import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
