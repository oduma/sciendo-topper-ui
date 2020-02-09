import { Component, OnInit, Input,OnChanges,SimpleChange } from '@angular/core';
import { Observable } from 'rxjs';
import { OverallEntry } from '../models/overall-entry';
import { OverallSituationService } from '../services/overall-situation-service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {
  historyEntries: Observable<OverallEntry[]>;
  @Input() 
  currentYear:number;
  orange64px: string;

  constructor(public overallSituationService:OverallSituationService) { 
    this.orange64px="orange-64px";

  }
  getPositionClass(rank:number){
    switch (rank) {
      case 1:
        return "number-one number-one-with-text";
      case 2:
        return "number-two number-two-with-text";
       case 3:
         return "number-three number-three-with-text";
      default:
         return "lower-positions lower-positions-with-text";
    }
  }
  getPositionClassForCheckBox(rank:number){
   switch (rank) {
     case 1:
       return "number-one";
     case 2:
       return "number-two";
      case 3:
        return "number-three";
     default:
        return "lower-positions";
   }
 }


  ngOnInit() {
    this.historyEntries=this.overallSituationService.getOverallEntriesWithouEvolution(this.currentYear);
  }

  ngOnChanges(changes:{[propKey:string]:SimpleChange}){
    this.currentYear=changes.currentYear.currentValue;
    this.historyEntries=this.overallSituationService.getOverallEntriesWithouEvolution(this.currentYear);
  }
}
