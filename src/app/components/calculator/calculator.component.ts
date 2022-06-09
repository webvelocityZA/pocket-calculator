import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  equation: any = '';
  display: any;
  result: any;
  title: string = 'Calculator';

  constructor() {
  }

  ngOnInit(): void {
  }

  updateCal = (e: any) => {
    this.display = this.calculateEQ(e.target.value);
  }


  calculateEQ = (val: any) => {
    // equation should not start with a operator
    if (this.equation.length === 0 && ['+', '-', '*', '/',].indexOf(val) > -1) return '';

    // reject consecutive operators using regex
    if (/[+\-*/]/.test(val) && /[+\-*/]/.test(this.equation.slice(-1))) return this.equation;

    if (val === '%') return this.percentage();

    if (/[*]/.test(val)) return this.equation = `(${this.equation})${val}`;

    if (/[/]/.test(val)) return this.equation = `(${this.equation})${val}`;

    return this.equation += val;
  }


  percentage = () => {
    if (this.display) return this.display / 100;

    return eval(this.equation.toString()) / 100
  }


  squareRoot = () => {
    this.display = Math.sqrt(this.display);
    this.equation = this.display;
  }


  clear = () => {
    this.display = '';
    this.equation = '';
  }


  results = () => {
    try {
      this.result = eval(this.equation.toString());
      this.display = this.result;
    } catch {
      console.log(`error: ${this.equation}`);
    }
  }

}
