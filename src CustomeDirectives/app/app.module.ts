import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompSuccessDirective } from './Directives/comp-success.directive';
import { CompFailureDirective } from './Directives/comp-failure.directive';
import { CustomeStyleDirective } from './Directives/custome-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompSuccessDirective,
    CompFailureDirective,
    CustomeStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
