import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-ng-switch',
  templateUrl: './app-ng-switch.component.html',
  styleUrls: ['./app-ng-switch.component.css']
})
export class AppNgSwitchComponent implements OnInit {

  PlayerSelection = '';
  constructor() { }

  ngOnInit() {
  }

  checkedChangeAValue(changedvalue){

    this.PlayerSelection = changedvalue;  
  }

}
