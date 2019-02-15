import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../iemployee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit{


  pageTitle : string = "Employee Details";
  employees: IEmployee[]=[
    {
      "empId": "E001",
      "name": "Leanne Graham",
      "email":"Sincere@april.biz",
      "phone" : "99696856967",
      "salary":50000,
      "appraisalRating":4
    },
    {
      "empId": "E002",
      "name": "Swati Ahire",
      "email":"SincereSwati@december.biz",
      "phone" : "334356567655",
      "salary":70000,
      "appraisalRating":5
    }
  ]
  constructor() { }

  ngOnInit() {
  }
}

  