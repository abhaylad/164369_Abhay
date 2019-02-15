import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatStepperModule} from '@angular/material/stepper';

import {MatInputModule} from '@angular/material/input';
import { StepComponent } from './step/step.component';


@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatStepperModule,
    MatInputModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }