import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  cal: any = 0;
  display: string = '';
  result: any = 0;


  constructor() {
  }

  ngOnInit(): void {
  }

  updateCal = (e: any) => {
    this.cal += e.target.value;
    // this.cal.push(e.target.name);
    // this.display = this.cal.join('');
  }


  clear = () => {
    this.cal = [];
    this.display = '';
    this.result = 0;
  }

  results = () => {
    try {
      this.result = eval(this.cal.join(''));
    } catch {
      this.result = "Error";
      console.log(`Error: ${this.cal.join('')}`);
    }
  }

}
