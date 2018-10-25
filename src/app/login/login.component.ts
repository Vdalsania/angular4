import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions , Headers }from '@angular/http';
import { map }from 'rxjs/operators';
import{ Observable, of }from 'rxjs';
import { resolve } from 'q';
import { error } from 'protractor';
import{ FormGroup, FormControl, Validators }from '@angular/forms';
import{ Router }from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = "Login";
  loginform = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email,Validators.pattern("[^ @]*@[^ @]*")]),
    password :new FormControl('',[Validators.required]),
    cpassword:new FormControl('',[Validators.required])
 });
errorMessage:string;
  constructor(private http:Http, private router: Router) { }

  ngOnInit() {
  
  }

  submit(email,pass,cpass){
    //alert(cpass);
   if(pass == cpass && pass !=''){
      if(email != ''){
        let headers1 = new Headers();
        headers1.append('Content-type', 'application/json');
        //headers.append('Access-Control-Allow-Headers', 'session-variable'); 
        headers1.append('Access-Control-Allow-Methods', 'POST, OPTIONS');
        headers1.append('Access-Control-Allow-Origin', '*');
        headers1.append('Access-Control-Allow-Credentials', 'true');
      var body = JSON.stringify({email:email, password:pass, cpassword:cpass});
        let options = new RequestOptions({ headers: headers1 });
      
        this.http.post('http://localhost:3000/',body, options)
                  .pipe(map((res:Response) => { 
                    console.log(res);
                    //res.json();
                    if(res.json().message == "Login Successfuly"){
                      window.location.href = "http://localhost:4200/dashboard";
                    }
                    else{
                      // this.errorMessage = "Login Failed";
                      this.loginform.controls['email'].setErrors({invalid: true});
                    }
                   

                  }))
                  .subscribe(data => { 

                    return true; 
                  },
                  error => {
                    console.log(error);
                    console.log("Login Failed");
                    return false;
                  }
                  ); 
    

      }else{
        alert("please enter email");
        window.location.href = "http://localhost:4200/"
      }
    }else{
      alert("please enter correct password and confirm password");
      window.location.href = "http://localhost:4200/"
    }
  
  }
}
