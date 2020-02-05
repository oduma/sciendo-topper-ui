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

  ngOnInit() {
    this.historyEntries=this.overallSituationService.getOverallEntriesWithouEvolution(this.currentYear);
  }

  ngOnChanges(changes:{[propKey:string]:SimpleChange}){
    this.currentYear=changes.currentYear.currentValue;
    this.historyEntries=this.overallSituationService.getOverallEntriesWithouEvolution(this.currentYear);
  }
}
