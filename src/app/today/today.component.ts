import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { DateProvider } from '../services/date-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  @Input()
  model:NgbDateStruct;
  fromDate:NgbDateStruct;
  toDate:NgbDateStruct;

  constructor(private dateProvider:DateProvider, private router:Router) {
    dateProvider.absoluteTimeInterval.subscribe((t)=>{
      this.fromDate=dateProvider.loadDate(t.fromDate);
      this.toDate=dateProvider.loadDate(t.toDate);
    });
   }

  ngOnInit() {
  }

  onDateSelection(ngbDate:NgbDate){
    this.dateProvider.executingDate = this.dateProvider.format(new Date(ngbDate.year,ngbDate.month-1,ngbDate.day));
    console.log("from the event in the date control: ",this.dateProvider.executingDate);
    this.router.navigate(['/daily',this.dateProvider.executingDate]);
  }
}
