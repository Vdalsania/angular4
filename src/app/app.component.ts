import { Component } from '@angular/core';
//import{ HeaderComponent }from '../app/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 //templateUrl:'./app/header/header.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to our Page';
  constructor() { }
  // httpdata;
  // searchparam = 2;
  // jsondata;
  // name;
  ngOnInit() {
  //   this.http.get("http://jsonplaceholder.typicode.com/users?id="+this.searchparam).
  //   map(
  //      (response) => response.json()
  //     ).
  //     subscribe(
  //       (data) => {this.converttoarray(data);}
  //     )
   
   }
  // converttoarray(data)
  // {this.name = data[0].name;}
}
