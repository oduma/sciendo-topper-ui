import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateProvider } from '../services/date-provider';
import { EntrySelectorService } from '../services/entry-selector-service';
import { LoaderService } from '../services/loader.service';
import { Observable } from 'rxjs';
import { EntrySelect } from '../models/entry-select';

@Component({
  selector: 'app-overall-situation',
  templateUrl: './overall-situation.component.html',
  styleUrls: ['./overall-situation.component.css']
})
export class OverallSituationComponent implements OnInit {
  thisYear:string;
  constructor(private dateProvider: DateProvider,
     private entrySelectorService:EntrySelectorService,
     public loaderService: LoaderService) {
  }

  ngOnInit() {
    this.thisYear=this.dateProvider.executingDate.split("-")[0];
    setTimeout(()=>this.loaderService.isLoading);

  }

  ngOnDestroy(){
    console.log("clear the selection");
  }

}
