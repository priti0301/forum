import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { ViewforumComponent } from './viewforum/viewforum.component';
import { ListforumComponent } from './listforum/listforum.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewforumComponent,
    ListforumComponent
  ],
  imports: [
    BrowserModule, 
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ViewforumComponent
      },
      {        
        path: 'listforum',
        component: ListforumComponent
      },
      { path: '**', redirectTo: '' }      
    ]),
    HttpModule,
    AngularFontAwesomeModule       
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
