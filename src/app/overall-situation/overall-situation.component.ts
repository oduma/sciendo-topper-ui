import { Component, OnInit } from '@angular/core';
import { DateProvider } from '../services/date-provider';
import { EntrySelectorService } from '../services/entry-selector-service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-overall-situation',
  templateUrl: './overall-situation.component.html',
  styleUrls: ['./overall-situation.component.css']
})
export class OverallSituationComponent implements OnInit {
  date: Date;
  constructor(private dateProvider: DateProvider,
     private entrySelectorService:EntrySelectorService,
     public loaderService: LoaderService) {
    this.date=dateProvider.date;
  }

  ngOnInit() {
    setTimeout(()=>this.loaderService.isLoading);
    this.entrySelectorService.clearAll();
  }

}
