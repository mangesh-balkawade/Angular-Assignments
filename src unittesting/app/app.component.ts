import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 title='mangesh'
  countCapital(str:String)
  {
    let icnt=0;
    for(let i=0;i<str.length;i++)
    {
      if((str.charAt(i)>='A') && (str.charAt(i)<='Z'))
      {
        icnt++;
      }
    }
    return icnt;
  }

  chkPassword(str:string)
  {
    let cap=0,small=0,digit=0,special=0;
    for (let i = 0; i < str.length; i++) 
    {
      if((str.charAt(i)>='A') && (str.charAt(i)<='Z'))
        cap++;
      else if((str.charAt(i)>='a') && (str.charAt(i)<='z'))
      small++;
      else if((str.charAt(i)>='0') && (str.charAt(i)<='9'))
      digit++;
      else if((str.charAt(i)=='!')||(str.charAt(i)=='@')||(str.charAt(i)=='$')||(str.charAt(i)=='#')||
      (str.charAt(i)=='%')||(str.charAt(i)=='&')||(str.charAt(i)=='*'))
      special++;
    }
    if(cap>=2 && small >=3 && digit>=2 && special>=1)
    return true;
    else
    return false;
  }

  arrayAddition(array:number[])
  {
    let isum=0;
    for (let index = 0; index < array.length; index++) {
      isum=isum+array[index];
      
    }
    return isum;
  }


  ngOnInit(): void {
      // console.log(
      //  this.countCapital("MangeshB"));
      //  console.log(
      //   this.chkPassword("MAnge12!@"));
      //   console.log(this.arrayAddition([1,2,3,4,5]));
        
  }
  
  
}
