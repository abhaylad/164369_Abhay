import { Component } from '@angular/core';
import{}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  firstName = "Abhay";
  lastName = "Lad";
  location: Address={
    "street" : "Mahavir Nagar",
    "city" : "Mumbai"
  };
}

class Address{
  street : string;
  city : string;
}