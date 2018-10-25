import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
declare var $: any;
// import $ from 'jquery';
import { MaterializeModule } from 'materialize-css';
// import * as M from 'materialize-css';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
     // alert("Menu open");
       $('.sidenav').sidenav();
      });
  }
  
}
