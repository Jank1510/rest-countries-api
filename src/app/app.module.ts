import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ServiceApiService} from './servicios/serviceApi.service';
import  {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
