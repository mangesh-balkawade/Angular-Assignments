import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data1:string='';
  public data2:string='';

  public len(len:any)
  {
    this.data2=len;
  }
  
}
