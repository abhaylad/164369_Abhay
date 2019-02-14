import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-two-number-demo',
  templateUrl: './add-two-number-demo.component.html',
  styleUrls: ['./add-two-number-demo.component.css']
})
export class AddTwoNumberDemoComponent implements OnInit {

  number1: number = 0;
  number2: number = 0;
  
  ans : number = 0;
  
  constructor() { }

  ngOnInit() {
  }

  add(){
    this.ans = this.number1 + this.number2;
    
  }
}
