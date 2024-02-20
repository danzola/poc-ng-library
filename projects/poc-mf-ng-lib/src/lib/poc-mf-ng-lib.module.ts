import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  declarations: [
    ContactListComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [    
    ContactListComponent
  ]
})
export class PocMfNgLibModule { }
