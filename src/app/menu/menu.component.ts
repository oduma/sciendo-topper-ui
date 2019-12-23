import { Component, OnInit } from '@angular/core';
import { DateProvider } from '../services/date-provider';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  lastYear:number;
  constructor(dateProvider: DateProvider) {
    this.lastYear=dateProvider.date.getFullYear()-1;
   }

  ngOnInit() {
  }

}
