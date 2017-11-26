import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { ViewforumComponent } from './viewforum/viewforum.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewforumComponent
  ],
  imports: [
    BrowserModule, 
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'viewforum',
        component: ViewforumComponent
      }
    ]),
    HttpModule,
    AngularFontAwesomeModule       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
