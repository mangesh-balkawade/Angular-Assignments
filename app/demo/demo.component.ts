import { Component, OnInit } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  no1:any=0;
  no2:any=0;
  sum:any=0;
  diff:any=0;
  constructor(private obj:ArithmaticService) { }

  ngOnInit(): void {
  }

  math()
{
  this.sum = this.obj.Add(this.no1,this.no2);
  this.diff=this.obj.Sub(this.no1,this.no2);
}
}
