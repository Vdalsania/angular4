import { Component, OnInit } from '@angular/core';
import { NewserviceService }from './../newservice.service';
import { FormGroup, FormControl }from '@angular/forms';
import { Http, Response, RequestOptions , Headers }from '@angular/http';
import { map }from 'rxjs/operators';
import{ Observable, of }from 'rxjs';
import { resolve } from 'q';
import { error } from 'protractor';
import { trigger, state, style, transition, animate } from '@angular/animations';
import{ViewdataComponent} from '../viewdata/viewdata.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [
    trigger('myanimation',[
    //    state('smaller',style({
    //       transform : 'translatex(100px)'
    //    })),
    //    state('larger',style({
    //       transform : 'translatex(0px)'
    //    })),
    //    transition('smaller <=> larger',animate('300ms ease-out'))
    // ])
    state('inactive', style({
      backgroundColor: '#eee',
      transform: 'scale(1)'
    })),
    state('active',   style({
      backgroundColor: '#cfd8dc',
      transform: 'scale(1.2)'
    })),
    transition('inactive => active', animate('200ms ease-in')),
    //transition('active => inactive', animate('100ms ease-out'))
  ])
 ]
})
export class TestComponent implements OnInit {
  newcomponent = "Entered in new Test component created";
  state: string = "active";

  name : "Test";
    addlistform = new FormGroup({
      name: new FormControl()
    });

  animate() {
     this.state= this.state == 'active' ? 'inactive' : 'active';
  }
  todaydate;
 data: any ={};
 
  constructor(private http : Http , private  newservice: NewserviceService) { }
  ngOnInit() {
    this.todaydate = this.newservice.showTodayDate();
    
    
    
  }
 add(data1:HTMLInputElement){
   let viewData = new ViewdataComponent(this.http, this.newservice, this.data);
   
   console.log(data1);
   let headers1 = new Headers();
    headers1.append('Content-type', 'application/json');
    headers1.append('Access-Control-Allow-Headers','X-Requested-With, Content-Type, Accept'); 
    headers1.append('Access-Control-Allow-Methods', 'POST, OPTIONS');
    headers1.append('Access-Control-Allow-Origin', '*');
    headers1.append('Access-Control-Allow-Credentials', 'true');
  //  var body = {id:data1.id,name: data1.name};
   let options = new RequestOptions({ headers: headers1 });
   
    this.http.post('http://localhost:3000/dashboard/test', JSON.stringify({name:data1}), options)
              .pipe(map((res:Response) => { 
                viewData.ngOnInit();
                //window.location.href = "http://localhost:4200/dashboard/viewdata";
                window.location.href = window.location.href;
                return res.json;
              }))
              .subscribe(data => { data
                //console.log(JSON.stringify(data));
                return true; 
              },
              error => {
                console.log(error);
                console.log("Error saving data");
                return false;
              }
              ); 
         
  // this.newservice.addlist(this.data);
  
 }

}
