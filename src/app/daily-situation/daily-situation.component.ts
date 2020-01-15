import { Component, OnInit,OnDestroy } from '@angular/core';
import { DateProvider } from '../services/date-provider';
import { LoaderService } from '../services/loader.service';
import { Observable } from 'rxjs';
import { NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-daily-situation',
  templateUrl: './daily-situation.component.html',
  styleUrls: ['./daily-situation.component.css']
})
export class DailySituationComponent implements OnInit {
  executingDate: Observable<string>;
  model:Observable<NgbDateStruct>;
  manualDate: Date;
  
  constructor(dateProvider:DateProvider, route:ActivatedRoute, 
    public loaderService:LoaderService) {
      this.executingDate=route.params.pipe(map(p=>{return p["today"]}));
      this.model=this.executingDate.pipe(map((s)=>{return  dateProvider.loadDate(s)}));
   }

  ngOnInit() {
    setTimeout(()=>this.loaderService.isLoading);
    console.log("initiating again the daily situation...");
    
  }
  ngOnDestroy(){
    console.log("clear the selection");
  }

}
