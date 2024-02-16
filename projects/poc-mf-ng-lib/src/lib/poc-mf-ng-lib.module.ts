import { NgModule } from '@angular/core';
import { PocMfNgLibComponent } from './poc-mf-ng-lib.component';
import { CalculatorComponent } from './calculator/calculator.component';



@NgModule({
  declarations: [
    PocMfNgLibComponent,
    CalculatorComponent
  ],
  imports: [
  ],
  exports: [
    PocMfNgLibComponent
  ]
})
export class PocMfNgLibModule { }
