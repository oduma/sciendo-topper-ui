import { Component, OnInit } from '@angular/core';
import { DateProvider } from '../services/date-provider';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  lastYear:string;
  executingDate: string;
  constructor(public dateProvider: DateProvider) {
   }

  ngOnInit() {
    if(this.dateProvider.executingDate==null){
      let today: Date=new Date();
      if(today.getHours()<this.dateProvider.refreshHour)
        this.executingDate=this.dateProvider.format(new Date(today.getTime()-24*60*60*1000));
      else
        this.executingDate=this.dateProvider.format(today);

    }
    else{
      this.executingDate=this.dateProvider.executingDate;
    }
    if(this.dateProvider.lastYear==null){
      this.lastYear=((new Date()).getFullYear()).toString();
    }
    else{
      this.lastYear=this.dateProvider.lastYear;
    }
  }
}
