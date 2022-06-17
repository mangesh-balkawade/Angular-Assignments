import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  str:string='';
  icnt:number=0;

  constructor(private obj:StringService) { }

  ngOnInit(): void {
  }

  countCap()
  {
    this.icnt=this.obj.CountCapital(this.str);
  }


}
