import { Component, OnInit } from '@angular/core';
import { DayEntry } from '../models/day-entry';
import { Observable } from 'rxjs';
import { DailySituationService } from '../services/daily-situation-service';

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrls: ['./daily-list.component.css']
})
export class DailyListComponent implements OnInit {
  dayEntries: Observable<DayEntry[]>;
  constructor(public dailySituationService: DailySituationService) {
    this.dayEntries= dailySituationService.dayEntries;
   }

  ngOnInit() {
  }

}
