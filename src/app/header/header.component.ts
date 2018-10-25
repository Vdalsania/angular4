import { Component, OnInit } from '@angular/core';
import{ Router }from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'to our Page';
  
  constructor(private router:Router) { }

  ngOnInit() {
     }
onLogout(){
    this.router.navigate(['/']);
}
}
