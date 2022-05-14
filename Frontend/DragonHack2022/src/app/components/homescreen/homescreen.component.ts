import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaygroundComponent } from '../playground/playground.component';

@Component({
  providers:[PlaygroundComponent],
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {

  constructor(private router: Router, private playground: PlaygroundComponent) { }

  public data = {
    username: '',
  }

  public play(): void {
    const navTo: string[] = ['/play'];
    this.playground.guess().then((response) => {
      console.log(response)
      this.router.navigate(navTo);
    });
  }

  ngOnInit(): void {
  }

}
