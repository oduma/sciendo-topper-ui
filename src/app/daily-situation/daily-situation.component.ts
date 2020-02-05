import { Component, OnInit,OnDestroy,OnChanges } from '@angular/core';
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
  model:Observable<NgbDateStruct>;
  manualDate: Date;
  
  constructor(dateProvider:DateProvider, route:ActivatedRoute, 
    public loaderService:LoaderService) {
      this.model=route.params.pipe(map(p=>{return dateProvider.loadDate(p["today"]);}));
   }

  ngOnInit() {
    setTimeout(()=>this.loaderService.isLoading);
    
  }
}
