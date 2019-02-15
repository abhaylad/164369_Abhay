import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public students: any; // this variable holds the list of students  
	    constructor() {  
	        //Initialized student array to hold some student object  
	        this.students = [{  
	            Id: 1,  
	            Name: "Mahesh",  
	            Address: "Thane",  
	            Gender: "Male"  
          },
          
          {  
            	Id: 2,  
24.	          Name: "Nishikant",  
25.	            Address: "Chembur",  
26.	            Gender: "Male"  
27.	        }, {  
28.	            Id: 3,  
29.	            Name: "Sameer",  
30.	            Address: "Mulund",  
31.	            Gender: "Male"  
32.	        }, {  
33.	            Id: 4,  
34.	            Name: "Nitin",  
35.	            Address: "Nahur",  
36.	            Gender: "Male"  
37.	        }, {  
38.	            Id: 4,  
39.	            Name: "Siri",  
40.	            Address: "Worli",  
41.	            Gender: "Female"  
42.	        }];  
43.	    }  

  constructor() { }

  ngOnInit() {
  }

}
