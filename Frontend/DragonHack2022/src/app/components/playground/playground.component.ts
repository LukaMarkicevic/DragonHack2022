import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
var JsonBigint = require('json-bigint');
import { NgImageSliderComponent } from 'ng-image-slider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor(private router: Router) { }

  public data = {
    movie: ''
  }

  public imageObject: Array<any> = [
    {
      image: 'data:image/jpg;base64,',
      thumbImage: 'data:image/jpg;base64,',
      order: 1
    },
    {
      image: 'data:image/jpg;base64,',
      thumbImage: 'data:image/jpg;base64,',
      order: 2
    },
    {
      image: 'data:image/jpg;base64,',
      thumbImage: 'data:image/jpg;base64,',
      order: 3
    },
    {
      image: 'data:image/jpg;base64,',
      thumbImage: 'data:image/jpg;base64,',
      order: 4
    }
  ];

  public backendUrl = 'https://chatty-sloths-stay-34-83-27-253.loca.lt/';
  public numOfImages = 1;

  async guess() {
    this.callDalleService(this.backendUrl, this.data.movie, this.numOfImages).then((response) => {
      for(var i = 0; i < this.numOfImages; i++) {
        this.imageObject[i].image = this.imageObject[i].image.concat(response.generatedImgs[i]);
        this.imageObject[i].thumbImage = this.imageObject[i].thumbImage.concat(response.generatedImgs[i]);
      }
      console.log(this.imageObject);
    });
  }

  async callDalleService(backendUrl, text, numImages) {
    const queryStartTime = new Date()
    const response = await Promise.race([
        (await fetch(backendUrl + `/dalle`, {
                method: 'POST',
                headers: {
                    'Bypass-Tunnel-Reminder': "go",
                    'mode': 'no-cors'
                },
                body: JSON.stringify({
                    text,
                    'num_images': numImages,
                })
            }
        ).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response
        })).text(), new Promise((_, reject) => setTimeout(
            () => reject(new Error('Timeout')), 60000))
    ]);

    return {
        'executionTime': Math.round(((100) / 1000 + Number.EPSILON) * 100) / 100,
        'generatedImgs': JsonBigint.parse(response)
    }
  }

  ngOnInit(): void {
  }

}
