import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocMfNgLibModule } from 'poc-mf-ng-lib'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PocMfNgLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
