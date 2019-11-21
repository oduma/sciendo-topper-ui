import { Component, OnInit } from '@angular/core';
import { DateProvider } from '../services/date-provider';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  currentYear:number;
  allYears:Observable<number[]>;

  constructor(private dateProvider: DateProvider,
    private activeRoute: ActivatedRoute,
    private router:Router) {
      this.currentYear=activeRoute.snapshot.params['year'];
      this.allYears=dateProvider.historyYears;
   }

  ngOnInit() {
  }

  onYearSelectChange(selectedValue)
  {
    console.log(`changed to: ${selectedValue}`);
    let yearHistoryUrl=`history/${selectedValue}`;
    this.router.navigate([yearHistoryUrl]);
  }
}
