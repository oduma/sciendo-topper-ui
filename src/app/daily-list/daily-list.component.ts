import { Component, OnInit } from '@angular/core';
import { DayEntryEvolution } from '../models/day-entry-evolution';
import { Observable } from 'rxjs';
import { DailySituationService } from '../services/daily-situation-service';
import {Position} from './../models/position';

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrls: ['./daily-list.component.css']
})
export class DailyListComponent implements OnInit {
  dayEntries: Observable<DayEntryEvolution[]>;
  constructor(public dailySituationService: DailySituationService) {
   }

   getRank(position: Position):number{
     if(position==null)
      return 0;
    return position.rank;
   }

  ngOnInit() {
    this.dayEntries=this.dailySituationService.getDayEntries();
  }

}
