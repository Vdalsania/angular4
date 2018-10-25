import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NewserviceService } from '../newservice.service';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import{ Observable}from 'rxjs';
import { Http, Response, RequestOptions,Headers,  RequestMethod }from '@angular/http';
import { map }from 'rxjs/operators';
import { resolve } from 'q';
import { error } from 'protractor';
import {PaginationService }from '../pagination.service';
import{ FormsModule }from '@angular/forms'

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {
  viewdata =  "Let's show the new data";
  Month = ["January","February","March","April","May","June"];
  isvisible = true;

  onMonthsChange(event){
    //alert("Thank you!!");
    this.isvisible = false; 
    console.log("Changed month from the Dropdown");
    //console.log(event);
  }
  myClickFunction(event){
    alert("Thank you click me!!");
    //console.log(event);
  }
 
  todaydate;
  data1 : any = {} ;
  // showEditTable : boolean = false;
   EditRowID :any = '';
  //private allItems: any[];
    // pager object
    pager: any = {};

    // paged items
   pagedItems: any[];

  constructor(private http : Http ,private newservice: NewserviceService, public paginationservice: PaginationService) { }
  fetchDataFromDatabase(){
    //console.log("I am called");
    this.newservice.fetchData().subscribe(response =>{
      this.data1 = response;
    console.log("dataaaaa="+ JSON.stringify(response));
    //console.log(JSON.stringify("==="+this.data1));
      
     // console.log("viewdata===="+JSON.stringify(this.data1));
       this.setPage(1);
      return this.data1;
    });
    
  }
 
  ngOnInit() {
    this.todaydate = this.newservice.showTodayDate();
    this.fetchDataFromDatabase();
    //alert(JSON.stringify());
  }
 
  setPage(page: number) {
    // get pager object from service
    this.pager = this.paginationservice.getPager(this.data1.data.length, page);
    //alert(JSON.stringify(this.pager));
    // get current page of items
    this.pagedItems = this.data1.data.slice(this.pager.startIndex, this.pager.endIndex + 1);
  // alert(JSON.stringify(this.pagedItems));
  }
 
  dataDelete(i){
    if(confirm("Are you sure to delete? ")) {
      console.log(i);
    //let head = new Headers();
    //head.append('Content-type', 'application/json');
    //headers.append('Access-Control-Allow-Headers', 'session-variable'); 
    // head.append('Access-Control-Allow-Methods', 'POST, OPTIONS ,DELETE');
    // head.append('Access-Control-Allow-Origin', '*');
    // head.append('Access-Control-Allow-Credentials', 'true');
  //  var body = {id:data1.id,name: data1.name};
 
   //let options = new RequestOptions({ headers: head, body:i});
   console.log("data1==="+JSON.stringify(this.data1));
   var n=0;
   for(n; n< (this.data1.data).length ; n++)
   {
    
      if(this.data1.data[n].list_id == i)
      {
        //alert(JSON.stringify(this.data1.data[n].list_id));
         break;
         
      }
   }
   //this.data1.push(this.data1.data[n]);
   (this.data1.data).splice(n,1);
   this.setPage(1);
//alert(JSON.stringify(this.data1));
  
    return this.http.delete('http://localhost:3000/dashboard/deletedata', {body:{id:i}})
              .pipe(map((res:Response) => { 
                return res.json;
              }))
              .subscribe(data => { data
               // console.log(JSON.stringify(data));
                //alert("Are you sure?");
                return true;
              },
              error => {
                console.log(error);
                console.log("Error saving data");
                return false;
              }
            );
    }
  }

  dataEdit(id: number, event: any){
    //alert(id);
    this.EditRowID = event.target.textContent;
    this.data1.data[id]= this.EditRowID;

    let head = new Headers();
    head.append('Content-type', 'application/json');
    //headers.append('Access-Control-Allow-Headers', 'session-variable'); 
    head.append('Access-Control-Allow-Methods', 'POST, OPTIONS');
    head.append('Access-Control-Allow-Origin', '*');
    head.append('Access-Control-Allow-Credentials', 'true');
    let options = new RequestOptions({ headers: head});
     this.http.post('http://localhost:3000/dashboard/viewdata',{ID:id, name:this.EditRowID})
                        .pipe(map((res:Response) => { 
                          this.ngOnInit();
                          //window.location.href = "http://localhost:4200/dashboard/viewdata";
                          //window.location.href = window.location.href;
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
  }
  
}
