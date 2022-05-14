import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {

  constructor(private router: Router) { }

  public data = {
    username: '',
  }

  public play(): void {
    const navTo: string[] = ['/play'];
    console.log(this.data.username);
    this.router.navigate(navTo);
  }


  // this.avtentikacijaStoritev
  //     .prijava(this.prijavniPodatki)
  //     .pipe(catchError((napaka: HttpErrorResponse) => {
  //         this.napakaNaObrazcu = napaka.toString()
  //       return throwError(() => napaka);
  //     })).subscribe(() => {
  //     this.usmerjanje.navigateByUrl("/");
  //   });




  ngOnInit(): void {
  }

}
