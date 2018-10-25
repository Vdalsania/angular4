import { Component, OnInit } from '@angular/core';
import tableDragger from 'table-dragger';
declare var $:any;
@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.tableDragger1();
  }
  tableDragger1()
  {
    console.log("drag");
    var el:any = document.getElementById('table');
    var dragger = tableDragger(el, {
    mode: 'row',
    dragHandler: '.handle',
   //    onlyBody: true,
    animation: 300
    });
    alert(JSON.stringify(dragger));
    dragger.on('dragging',function(from, to){
      alert('from');
    });
    
  //   var el2:any = document.getElementById('table2');
  //   var dragger2 = tableDragger(el2, {
  //   mode: 'row',
  //   dragHandler: '.handle',
  //  //    onlyBody: true,
  //   animation: 300
  //   });
  //   alert(JSON.stringify(dragger2));
  //   dragger2.on('dragging',function(from, to){
  //     alert('from');
  //   });
  } 
  
}
