import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { EntryTimeLine } from '../models/entry-time-line';
import { map, take, distinct } from 'rxjs/operators';
import {DataForChart } from '../models/chart-data-series';
import { PositionAtDate } from '../models/position-at-date';
import { ChartDataSets } from 'chart.js';
@Injectable({
  providedIn: 'root'
})
export class GraphDataProviderService {

  private colorsAvailable:Observable<string>;
  private lightBackgroundColor: string='rgba(255,255,255,0.28)';

  constructor() {
    this.colorsAvailable=Observable.create(function(observer){
      observer.next('#fa4dc3');
      observer.next('#aed1fc');
      observer.next('#fa9c43');
      observer.next('#fa98eb');
      observer.next('red');
      observer.next('#96bf0d');
      observer.next('#3ac2c7');
      observer.complete();
    });
   }
   
   private processEntryWithEvolution(entryTimeLine:EntryTimeLine, sortedDates:string[]):ChartDataSets{

    let chartDataSet:ChartDataSets={label:"",data: []};
    sortedDates.map((currentDate)=>{
            let foundEntryTimeLine = entryTimeLine.positionAtDates.find((val: PositionAtDate)=>val.date===currentDate);
            if(foundEntryTimeLine==null)
              chartDataSet.data.push(null);
            else
              chartDataSet.data.push(foundEntryTimeLine.position.score);
          });

    chartDataSet.label=entryTimeLine.name;
    return chartDataSet;
  }

  plotEntries(entriesTimelines: EntryTimeLine[]):DataForChart{
    const dates:string[]= [];
    let distinctSortedDates:string[]=[];
    
    var result: DataForChart= new DataForChart();
    of(entriesTimelines).pipe(
      map((entryTimeLines:EntryTimeLine[])=>{
        entryTimeLines.map((e)=>{
          e.positionAtDates.map((p)=>dates.push(p.date))
        });
        return dates;
      }
      )
    ).subscribe((val)=>{
      from(this.sortDates(val)).pipe(distinct()).subscribe((v)=>distinctSortedDates.push(v));
    });

    result.timeLineMilestones= distinctSortedDates.map((sortedDate:string)=>{
      let tempDate=sortedDate.split("-");
      return `${tempDate[2]}-${tempDate[1]}-${tempDate[0]}`;
    });

    from(entriesTimelines).pipe(
       map((entryTimeLine:EntryTimeLine)=>{
           return this.processEntryWithEvolution(entryTimeLine,distinctSortedDates)
       })).subscribe((val)=>result.dataSeries.push(val));


    this.colorsAvailable
      .pipe(take(entriesTimelines.length))
      .subscribe((val:string)=>
       result.chartColors.push({borderColor:val,backgroundColor:this.lightBackgroundColor}))
    return result;

   }

   sortDates(initialArray: string[]): string[]{
       return initialArray.sort((a,b)=>{
          if(a<b)
          {
            return -1;
          }
          if(a==b)
          {
            return 0;
          }
          if(a>b)
          {
            return 1;
          }
      })
   }
}
