import { Injectable, Inject } from '@angular/core';
import { SHRAMBA_BRSKALNIKA } from "../clases/shramba";
import { HomescreenComponent } from '../components/homescreen/homescreen.component';

@Injectable({
  providedIn: 'root'
})
export class HomescreenService {

  constructor(@Inject(SHRAMBA_BRSKALNIKA) private shramba: Storage) { }

  public shraniZeton(username: string): void {
    this.shramba.setItem('username', username);
  }

  public vrniZeton(): string | null {
    return this.shramba.getItem('username');
  }
}
