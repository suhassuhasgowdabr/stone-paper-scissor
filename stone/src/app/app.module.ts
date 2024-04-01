import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Rou1Component } from './rou1/rou1.component';
import { Rou2Component } from './rou2/rou2.component';
import { MainComComponent } from './main-com/main-com.component';
import { Header1Component } from './header1/header1.component';
import { Footer1Component } from './footer1/footer1.component';
import { RoughcomponentComponent } from './roughcomponent/roughcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    Rou1Component,
    Rou2Component,
    MainComComponent,
    Header1Component,
    Footer1Component,
    RoughcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
