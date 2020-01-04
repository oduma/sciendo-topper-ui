import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  @Input()
  date:Date;
  @Input()
  model:NgbDateStruct;
  @Input()
  initial:NgbDateStruct;
  @Output()
  onDateChanged= new EventEmitter<NgbDateStruct>();

  constructor() {
   }

  ngOnInit() {
  }

  onDateSelection(date){
    this.onDateChanged.emit(date);
  }
}
