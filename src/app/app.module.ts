import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from './myservice.service'
@NgModule({
  declarations: [
    AppComponent,
    NewcompComponent,
    TestcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
