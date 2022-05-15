import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/services/datatransfer.service';
// @ts-ignore
import * as loadingbar from './loadingbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor( private datatransfer: DatatransferService) { }

  public player: any;

  public showPlayer() {
    this.player = this.datatransfer.vrniZeton();
  }

  ngOnInit(): void {
    console.log('test')
    //var a = new loadingbar(0);
    this.showPlayer()
  }
}
