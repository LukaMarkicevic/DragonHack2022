import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomescreenComponent} from "../components/homescreen/homescreen.component";
import { PlaygroundComponent } from '../components/playground/playground.component';

const paths: Routes = [
  {path: '', component: HomescreenComponent},
  {path: 'play', component: PlaygroundComponent}
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(paths)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
