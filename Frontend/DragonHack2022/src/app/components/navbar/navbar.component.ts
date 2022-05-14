import { Component, OnInit } from '@angular/core';
import { HomescreenComponent } from '../homescreen/homescreen.component';
import { DatatransferService } from 'src/app/services/datatransfer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private homescreen: HomescreenComponent, private datatransfer: DatatransferService) { }

  public player = {
    name: '',
  }

  public showPlayer() {
    this.player.name = this.datatransfer.getPlayer()
  }

  ngOnInit(): void {
    this.showPlayer();
    console.log(this.player.name)
  }

}
