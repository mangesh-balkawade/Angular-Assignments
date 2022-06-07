import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  public data:any;

  @Output()
  public myEvent=new EventEmitter();

  public sendData()
  {
    return this.myEvent.emit("Hello From Child...");
  }



  

}
