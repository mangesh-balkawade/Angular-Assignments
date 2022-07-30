import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarvellousChkPipe } from 'src/Pipes/marvellous-chk.pipe';
import { MyAddPipe } from 'src/Pipes/my-add.pipe';
import { MyMultPipe } from 'src/Pipes/my-mult.pipe';
import { MyRevPipe } from 'src/Pipes/my-rev.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousChkPipe,
    MyAddPipe,
    MyMultPipe,
    MyRevPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
