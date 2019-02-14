import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-ng-if',
  templateUrl: './app-ng-if.component.html',
  styleUrls: ['./app-ng-if.component.css']
})
export class AppNgIfComponent implements OnInit {

  showDiv = false;
  toggleVisibility():void{
    this.showDiv = !this.showDiv;
  }

  constructor() { }

  ngOnInit() {
  }

}
