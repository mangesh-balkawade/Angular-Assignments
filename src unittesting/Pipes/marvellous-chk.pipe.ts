import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(no:number, str:string):string {
    let flag:boolean=true;
    if(str=="Prime")
    {
      if(no==1||no==2)
      {
        return "No is not Prime";
      }
      for (let index = 2; index <=no/2 ; index++) 
      {
         if(no%index==0)
         {
           flag=false;
           break;
         }
      }
      if(flag==false)
      return "It is not Prime number";
      else
      return "It is Prime Number";
    }
    else if(str=="Perfect")
    {
      let add=0;
      for (let index = 1; index <=no/2 ; index++) 
      {
         if(no%index==0)
         {
           add=add+index;
         }
      }
      if(add==no)
      return "It is Perfect number";
      else
      return "It is not a Perfect Number";
    }
    else if(str=='Even')
    {
      if(no%2==0)
      return "No is Even";
      else
      return "No is Not Even";
    }
    else if(str=='Odd')
    {
      if(no%2!=0)
      return "No is Odd";
      else
      return "No is Not Odd";
    }
    else
    {
      return "The input given is wrong"
    }
  }

}
