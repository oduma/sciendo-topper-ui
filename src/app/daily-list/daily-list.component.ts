import { Component, OnInit, Output, EventEmitter,Input,OnChanges,SimpleChange } from '@angular/core';
import { DayEntryEvolution } from '../models/day-entry-evolution';
import { Observable, Subscription } from 'rxjs';
import { DailySituationService } from '../services/daily-situation-service';
import {Position} from './../models/position';
import { DateProvider } from '../services/date-provider';

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrls: ['./daily-list.component.css']
})
export class DailyListComponent implements OnInit {
  dayEntries: Observable<DayEntryEvolution[]>;
  @Output()
  onDateFound= new EventEmitter<string>();
  @Input()
  manualDate:Date;

  dateFoundRef: Subscription=null;

  constructor(public dailySituationService: DailySituationService, private dateProvider:DateProvider) {
   }

   getRank(position: Position):number{
     if(position==null)
      return 0;
    return position.rank;
   }

  ngOnInit() {
    this.dayEntries=this.dailySituationService.getDayEntries(this.dateProvider.date);
    this.dateFoundRef=this.dailySituationService.dateFound$.subscribe((s)=>this.onDateFound.emit(s));
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}){
    let changedProp :Date=changes["manualDate"].currentValue;
    console.log("I'm getting from the parent:",changedProp);
    this.dayEntries=this.dailySituationService.getDayEntries(changedProp);
  }

  ngOnDestroy(){
    this.dateFoundRef.unsubscribe();
  }
}
