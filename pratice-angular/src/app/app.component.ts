import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pratice-angular';
  name='Abhay';
  word='HaHa';

  onClick():void {
    console.log('you Clicked me !!');
  }
}
