import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from "./routing/routing.module";
import { PlaygroundComponent } from './components/playground/playground.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
