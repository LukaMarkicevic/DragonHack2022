import { Injectable } from '@angular/core';
import { HomescreenComponent } from '../components/homescreen/homescreen.component';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {

  constructor(private homescreen: HomescreenComponent) { }

  public getPlayer(): string {
    return this.homescreen.data.username;
  }
}
