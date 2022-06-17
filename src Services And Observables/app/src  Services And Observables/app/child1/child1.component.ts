import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  no:number=0;
  flag:boolean=false;

  constructor(private obj:NumberService) { }

  ngOnInit(): void {
  }

  prime1()
  {
     this.flag=this.obj.ChkPrime(this.no);  
  }

}
