import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as loadingbar from './loadingbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  public player: any;
  public bar: any;
  public p = 0;

  public update() {
    this.bar = document.getElementById('prog-bar') as HTMLElement;
    console.log(this.bar)
    this.bar.style.width = this.p + '%';
  }  
  public countup() {
    if (this.p < 100) { this.p += 10; }
      this.update();
  }
  public countdown() {
    if (0 < this.p) { this.p -= 10; }
      this.update();
  }

  ngOnInit(): void {
  }
}
