import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder) 
  {

  }

  ValidationForm = this.fb.group(
    {
      firstName: ['', [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      lastName: ['', [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      phoneNo: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9_]+@[a-zA-Z]+[.][a-zA-Z]{2,}")]],
      city: ['', [Validators.required, Validators.pattern("[a-zA-Z]{4,}")]],
      state: ['', [ Validators.required,Validators.pattern("(Maharashtra|Gujrat|Uttar Pradesh)")]],
      zipCode: ['', [ Validators.required, Validators.pattern("[0-9]{5}")]],
      comment: ['',[ Validators.required, Validators.pattern("[a-zA-Z0-9,!@#$%^&*()]{30,}")]]
    }
  )

}
