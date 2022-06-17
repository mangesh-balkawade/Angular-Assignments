import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  no:number=0;
  str:string='';
  icnt:number=0;
  flag:boolean=false;

  constructor(private numberServiceObj:NumberService,
    private stringServiceObj:StringService) { }

  ngOnInit(): void {
  }

  countCap()
  {
    this.icnt=this.stringServiceObj.CountCapital(this.str);
  }

  prime()
  {
     this.flag=this.numberServiceObj.ChkPrime(this.no);  
  }



}
