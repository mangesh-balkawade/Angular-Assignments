import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  str:string="Marvellous Infosystem"
 
  public fun()
  {
    this.str = "Education For Better Tommorrow";
  }

  public upperCase()
  {
    this.str=this.str.toUpperCase();
  }

  public lowerCase()
  {
    this.str=this.str.toLowerCase();
  }
}
