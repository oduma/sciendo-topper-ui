import { Component, OnInit, Output, EventEmitter,OnDestroy } from '@angular/core';
import { DayEntryEvolution } from '../models/day-entry-evolution';
import { Observable, Subscription } from 'rxjs';
import { DailySituationService } from '../services/daily-situation-service';
import {Position} from './../models/position';

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrls: ['./daily-list.component.css']
})
export class DailyListComponent implements OnInit {
  dayEntries: Observable<DayEntryEvolution[]>;
  @Output()
  onDateFound= new EventEmitter<string>();

  dateFoundRef: Subscription=null;

  constructor(public dailySituationService: DailySituationService) {
   }

   getRank(position: Position):number{
     if(position==null)
      return 0;
    return position.rank;
   }

  ngOnInit() {
    this.dayEntries=this.dailySituationService.getDayEntries();
    this.dateFoundRef=this.dailySituationService.dateFound$.subscribe((s)=>this.onDateFound.emit(s));
  }

  ngOnDestroy(){
    this.dateFoundRef.unsubscribe();
  }
}
