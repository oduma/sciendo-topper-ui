import { Component, OnInit,OnDestroy } from '@angular/core';
import { DateProvider } from '../services/date-provider';
import { LoaderService } from '../services/loader.service';
import { Observable } from 'rxjs';
import { NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-daily-situation',
  templateUrl: './daily-situation.component.html',
  styleUrls: ['./daily-situation.component.css']
})
export class DailySituationComponent implements OnInit {
  date: Observable<Date>;
  model:Observable<NgbDateStruct>;
  manualDate: Date;
  
  constructor(private dateProvider:DateProvider, 
    public loaderService:LoaderService) {
      console.log("In constructor the date is: ", dateProvider.date)
    this.date=Observable.create((o)=>{o.next(dateProvider.date);});
    this.model=Observable.create((o)=>{o.next({day:dateProvider.date.getDate(),month:dateProvider.date.getMonth(),year:dateProvider.date.getFullYear()});});
   }

   foundDate(event$){
     let tempDate: Date=new Date(event$);
     console.log("In the finder the month is: ", tempDate.getMonth());
     this.date=Observable.create((o)=>{o.next(tempDate);o.complete();});
     this.model=Observable.create((o)=>{o.next({day:tempDate.getDate(),month:tempDate.getMonth()+1,year:tempDate.getFullYear()});});

   }

   changedDate(date:NgbDate){
     let tempDate: Date= new Date(date.year,date.month-1, date.day);
     console.log("Changed date to: ", tempDate);
     this.date=Observable.create((o)=>{o.next(tempDate);o.complete();});
     this.manualDate=tempDate;
   }

  ngOnInit() {
    setTimeout(()=>this.loaderService.isLoading);
    console.log("initiating again the daily situation...");
    
  }
  ngOnDestroy(){
    console.log("clear the selection");
  }

}
