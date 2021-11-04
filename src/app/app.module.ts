import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button' ;
import {CalendarModule} from 'primeng/calendar';
import { ModelComponent } from './components/model/model.component';
import { AbutUsComponent } from './components/abut-us/abut-us.component';



@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    AbutUsComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
