import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  //styles: ['table { color: #369;font-family: Arial, Helvetica, sans-serif;font-size: large; border-collapse: collapse;}', 'td {border: 1px solid black; }']       
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  firstName: string = "Abhay";
  lastName:string = "Lad";
  gender: string = "Male";
  qualification: string = "BE"
  constructor() { }

  ngOnInit() {
  }

}
