import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {


@Output() public myEvent =new EventEmitter();

 public message:any;

 public sendData(data:any)
 {
   this.message=data;
   return this.myEvent.emit(this.message);
 }



}
