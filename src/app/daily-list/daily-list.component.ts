import { Component, OnInit, Output, EventEmitter,Input,OnChanges,SimpleChange } from '@angular/core';
import { DayEntryEvolution } from '../models/day-entry-evolution';
import { Observable, Subscription } from 'rxjs';
import { DailySituationService } from '../services/daily-situation-service';
import {Position} from './../models/position';
import { DateProvider } from '../services/date-provider';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrls: ['./daily-list.component.css']
})
export class DailyListComponent implements OnInit {
  dayEntries$: Observable<DayEntryEvolution[]>;
  executingDate:string;
  orange64px:string;  
  constructor(public dailySituationService: DailySituationService, private dateProvider:DateProvider,private route:ActivatedRoute) {
    route.params.subscribe((p)=>this.executingDate=p["today"]);
    this.orange64px="orange-64px";
  }

   getRank(position: Position):number{
     if(position==null)
      return 0;
    return position.rank;
   }

  ngOnInit() {
    this.dayEntries$=this.dailySituationService.getDayEntries(this.executingDate);
  }
}
