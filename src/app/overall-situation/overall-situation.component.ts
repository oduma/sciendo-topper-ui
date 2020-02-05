import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateProvider } from '../services/date-provider';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-overall-situation',
  templateUrl: './overall-situation.component.html',
  styleUrls: ['./overall-situation.component.css']
})
export class OverallSituationComponent implements OnInit {
  thisYear:string;
  constructor(private dateProvider: DateProvider,
     public loaderService: LoaderService) {
  }

  ngOnInit() {
    this.thisYear=this.dateProvider.executingDate.split("-")[0];
    setTimeout(()=>this.loaderService.isLoading);

  }
}
