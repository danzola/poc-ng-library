import { Component, ViewChild } from '@angular/core';
import { CalculatorComponent } from 'poc-mf-ng-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(CalculatorComponent)
  calculator!: CalculatorComponent;

  numero1: number = 0;
  resultado: number = 0;

  sumar() {
    this.resultado = this.calculator.sumar();
  }
}
