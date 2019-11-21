import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OverallEntry } from '../models/overall-entry';
import { OverallSituationService } from '../services/overall-situation-service';
import { DateProvider } from '../services/date-provider';

@Component({
  selector: 'app-overall-list',
  templateUrl: './overall-list.component.html',
  styleUrls: ['./overall-list.component.css']
})
export class OverallListComponent implements OnInit {
  overallEntries: Observable<OverallEntry[]>;

  constructor(public overallSituationService: OverallSituationService, private dateProvider:DateProvider) {
   }

  ngOnInit() {
    let currentYear:number=this.dateProvider.date.getFullYear();
    this.overallEntries=this.overallSituationService.getOverallEntries(currentYear);

  }

}
