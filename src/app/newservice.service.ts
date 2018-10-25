import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map'; 
import { Http, Response, RequestOptions,Headers }from '@angular/http';
import { map }from 'rxjs/operators';
import{ Observable, of }from 'rxjs';
import { resolve } from 'q';
import { error } from 'protractor';

@Injectable()
export class NewserviceService {

  constructor(private http:Http) {}
  showTodayDate(){
    let ndate = new Date();
    return ndate;
  }
 
  fetchData(){
  return  this.http.get('http://localhost:3000/dashboard/viewdata')
              .pipe(map((res:Response) =>{
                return res.json();
              }));
  } 


  
  // addlist(data1:any){
  //   console.log(data1);
  //   var body = {id:data1.id,name: data1.name};
  //   alert(JSON.stringify(data1.name));
  //   // return this.http.post('http://localhost:3000/?name='+data1.name , body)
  //   //           .pipe(map((res:Response) => { return res.json;}))
  //   //           .subscribe(data1 => {
  //   //             console.log(JSON.stringify(data1));
  //   //             return true;
  //   //           },
  //   //           error => {
  //   //             console.log(error);
  //   //             console.log("Error saving data");
  //   //             return false;
  //   //           }
              
  //   //         );
  // }

}
