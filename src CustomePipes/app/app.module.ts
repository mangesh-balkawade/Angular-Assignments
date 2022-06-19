import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyRevPipe } from './Pipes/my-rev.pipe';
import { MyAddPipe } from './Pipes/my-add.pipe';
import { MyMultPipe } from './Pipes/my-mult.pipe';
import { MarvellousChkPipe } from './Pipes/marvellous-chk.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyRevPipe,
    MyAddPipe,
    MyMultPipe,
    MarvellousChkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
