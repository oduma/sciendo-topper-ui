import { Component, OnInit, Input } from '@angular/core';
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
  @Input() currentYear:number;

  constructor(public overallSituationService:OverallSituationService) { }

  ngOnInit() {
    this.historyEntries=this.overallSituationService.getOverallEntries(this.currentYear);

  }

}
