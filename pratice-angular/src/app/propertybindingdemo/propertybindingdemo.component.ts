import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybindingdemo',
  templateUrl: './propertybindingdemo.component.html',
  styleUrls: ['./propertybindingdemo.component.css']
})
export class PropertybindingdemoComponent implements OnInit {

  name1: string = "Naruto Uzumaki";
  //enterName: string = "Naruto Uzumaki";
  constructor() { }

  ngOnInit() {
  }

  onTest(){
   return true; 
  }

}
