import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { PropertybindingdemoComponent } from './propertybindingdemo/propertybindingdemo.component';
import { from } from 'rxjs';
import { AddTwoNumberDemoComponent } from './add-two-number-demo/add-two-number-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    PropertybindingdemoComponent,
   AddTwoNumberDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
