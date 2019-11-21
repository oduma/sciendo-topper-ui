import { Component, OnInit } from '@angular/core';
import { DateProvider } from '../services/date-provider';

@Component({
  selector: 'app-overall-situation',
  templateUrl: './overall-situation.component.html',
  styleUrls: ['./overall-situation.component.css']
})
export class OverallSituationComponent implements OnInit {
  date: Date;
  constructor(private dateProvider: DateProvider) {
    this.date=dateProvider.date;
  }

  ngOnInit() {
  }

}
