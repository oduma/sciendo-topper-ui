import { Component, OnInit } from '@angular/core';
import { DateProvider } from '../services/date-provider';
import { EntrySelectorService } from '../services/entry-selector-service';
import { LoaderService } from '../services/loader.service';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-daily-situation',
  templateUrl: './daily-situation.component.html',
  styleUrls: ['./daily-situation.component.css']
})
export class DailySituationComponent implements OnInit {
  date: Observable<Date>;
  
  constructor(dateProvider:DateProvider, 
    private entrySelectorService: EntrySelectorService, 
    private loaderService:LoaderService) {
    this.date=Observable.create((o)=>{o.next(dateProvider.date);});
   }

   foundDate(event$){
     let tempDate: Date=new Date(event$);
     this.date=Observable.create((o)=>{o.next(tempDate);o.complete();});

   }

  ngOnInit() {
    setTimeout(()=>this.loaderService.isLoading);
    this.entrySelectorService.clearAll();
    
  }

}
