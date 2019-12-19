import { Component, OnInit } from '@angular/core';
import { DateProvider } from '../services/date-provider';
import { EntrySelectorService } from '../services/entry-selector-service';

@Component({
  selector: 'app-daily-situation',
  templateUrl: './daily-situation.component.html',
  styleUrls: ['./daily-situation.component.css']
})
export class DailySituationComponent implements OnInit {
  date: Date;
  
  constructor(private dateProvider:DateProvider, private entrySelectorService: EntrySelectorService) {
    this.date=dateProvider.date;
   }

  ngOnInit() {
    this.entrySelectorService.clearAll();
    
  }

}
