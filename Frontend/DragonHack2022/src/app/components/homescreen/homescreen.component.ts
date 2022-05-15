import { Component, OnInit, EventEmitter, Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PlaygroundComponent } from '../playground/playground.component';
import { HomescreenService } from '../../services/homescreen.service';
import { DatatransferService } from 'src/app/services/datatransfer.service';

@Component({
  providers:[PlaygroundComponent],
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {

  constructor(private router: Router, private playground: PlaygroundComponent, 
              private homescreen: HomescreenService, private datatransfer: DatatransferService) { }

  public username = '';
  public player;

  public showPlayer() {
    this.player = this.datatransfer.vrniZeton() !== null ? this.datatransfer.vrniZeton() : '';
  }

  public play() {
    this.playground.guess().then((response) => {
      this.router.navigateByUrl('/play');
    });
    this.homescreen.shraniZeton(this.username);
    console.log(this.username)
  }

  ngOnInit(): void {
    this.showPlayer();
    console.log(this.player)
  }
}
