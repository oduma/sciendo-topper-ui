import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-of-loved',
  templateUrl: './no-of-loved.component.html',
  styleUrls: ['./no-of-loved.component.css']
})
export class NoOfLovedComponent implements OnInit {

  @Input()
  noOfLovedTracks: number;
  sizeOfLove:string;
  sizeOfLoveClass:string;
  sizeOfLoveTooltipClass:string;

  constructor() { }

  ngOnInit() {
    this.sizeOfLoveTooltipClass="love-tooltip";
    switch(this.noOfLovedTracks)
    {
      case 0:
        this.sizeOfLoveClass="heart-none";
        this.sizeOfLove="1x";
        break;
      case 1:
        this.sizeOfLoveClass="heart-normal";
        this.sizeOfLove="1x";
        break;
      case 2:
        this.sizeOfLoveClass="heart-big";
        this.sizeOfLove="1x";
        break;
      default:
        this.sizeOfLoveClass="heart-huge";
        this.sizeOfLove="1x";
    }
  }

}
