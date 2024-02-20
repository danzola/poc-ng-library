import { Component,Input } from '@angular/core';

@Component({
  selector: 'lib-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  @Input() numero1: number = 0;
  numero2: number = 0;

  sumar() {
    return this.numero1+this.numero2;
  }
}
