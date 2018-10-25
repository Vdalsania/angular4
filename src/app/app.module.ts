import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule }from '@angular/router';

import { HttpModule }from '@angular/http';
import { NewserviceService }from './newservice.service';
import { AppComponent } from './app.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { ChangDataDirective } from './chang-data.directive';
import { SqrtPipe } from './sqrt.pipe';
import { TestComponent } from './test/test.component';
import { ReactiveFormsModule}from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import{ PagerService }from './service/index';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaginationService } from './pagination.service';

import {tableDragger} from 'table-dragger';
import { DragndropComponent } from './dragndrop/dragndrop.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewdataComponent,
    ChangDataDirective,
    SqrtPipe,
    TestComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
    DragndropComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    //HeaderComponent,
    BrowserAnimationsModule,
    //LoginComponent,
    
    RouterModule.forRoot([
      {
        path: '',
        component:LoginComponent
      },
      {
        path: 'dashboard',
        component:DashboardComponent
      },
      {
        path: 'dashboard/viewdata',
        component:ViewdataComponent
      },
      {
        path: 'dashboard/test',
        component:TestComponent
      },
      {
        path: 'sidebar',
        component:SidebarComponent
      },
      {
        path: 'dashboard/dragndrop',
        component:DragndropComponent
      }

    ]),
  ],
  providers: [NewserviceService,PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
