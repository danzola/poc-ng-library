import { NgModule } from '@angular/core';
import { PocMfNgLibComponent } from './poc-mf-ng-lib.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PocMfNgLibComponent,
    CalculatorComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    PocMfNgLibComponent,
    CalculatorComponent
  ]
})
export class PocMfNgLibModule { }
