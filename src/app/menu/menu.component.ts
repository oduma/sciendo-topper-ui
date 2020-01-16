import { Component, OnInit } from '@angular/core';
import { DateProvider } from '../services/date-provider';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  lastYear:number;
  constructor(public dateProvider: DateProvider) {
   }

  ngOnInit() {
    console.log("in menu constructor: ", this.dateProvider.executingDate);

  }

}
