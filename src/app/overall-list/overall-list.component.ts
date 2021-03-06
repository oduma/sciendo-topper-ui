import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { OverallEntry } from '../models/overall-entry';
import { OverallSituationService } from '../services/overall-situation-service';
import { DateProvider } from '../services/date-provider';
import {Position} from '../models/position';
import { OverallEntryEvolution } from '../models/overall-entry-evolution';

@Component({
  selector: 'app-overall-list',
  templateUrl: './overall-list.component.html',
  styleUrls: ['./overall-list.component.css']
})
export class OverallListComponent implements OnInit {
  overallEntries$: Observable<OverallEntryEvolution[]>;
  @Input()
  thisYear:string;
  orange64px: string;
  constructor(public overallSituationService: OverallSituationService, private dateProvider:DateProvider) {
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
  getRank(position: Position):number{
    if(position==null)
     return 0;
   return position.rank;
  }

  ngOnInit() {
    this.overallEntries$=this.overallSituationService.getOverallEntries(Number(this.thisYear));

  }

}
