import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Asm1';
  no=1.99;

  ngOnInit(): void {
      this.no.toFixed(1);
  }
  
}
