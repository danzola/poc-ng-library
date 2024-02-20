import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PocMfNgLibModule } from 'poc-mf-ng-lib'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PocMfNgLibModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
