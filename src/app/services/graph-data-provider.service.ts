import { Injectable } from '@angular/core';
import { EntrySelect } from '../models/entry-select';
import { RepositoryService } from './repository-service';
import { Observable, forkJoin, of, from } from 'rxjs';
import { EntryWithEvolution } from '../models/entry-with-evolution';
import { map, mergeAll, distinct, scan, reduce, find, take } from 'rxjs/operators';
import { EntryEvolution } from '../models/entry-evolution';
import { ChartDataSeries } from '../models/chart-data-series';

@Injectable({
  providedIn: 'root'
})
export class GraphDataProviderService {

  plotedEntries: EntrySelect[];
  timeLineMilestones: Observable<string>;
  chartDataSeries:Observable<ChartDataSeries>;
  colorsAvailable:Observable<string>;
  colorsSelected:Observable<string>;

  constructor(private repositoryService: RepositoryService) {
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
   
   private processEntryWithEvolution(entryWithEvolution:EntryWithEvolution, sortedDates:Observable<Date>):Observable<number>{
    return sortedDates.pipe(
      map((currentDate:Date)=>{
        let foundEvolutionEntry = entryWithEvolution.entryEvolution.find((val: EntryEvolution)=>val.date===currentDate);
        if(foundEvolutionEntry==null)
          return null;
        else
          return foundEvolutionEntry.position.positionPoints.totalPoints;
            }));
   }

   public plotEntries(entries: EntrySelect[]){
     
    this.plotedEntries=entries;
    const dates:Date[]= [];
    
    
    const entriesWithEvolution:Observable<EntryWithEvolution>=
      this.repositoryService.getEntriesByIds(entries);

    entriesWithEvolution.pipe(
       map((entryWithEvolution: EntryWithEvolution)=>entryWithEvolution.entryEvolution), 
       mergeAll(),
       distinct()).pipe(
         map((entryEvolution:EntryEvolution)=>entryEvolution.date))
       .subscribe((curDate:Date)=>dates.push(curDate));
    let sortedDates=from(dates.sort((a,b)=>a.getTime()-b.getTime()));
    this.timeLineMilestones = sortedDates.pipe(map((date)=>date.toDateString()));
    
    this.chartDataSeries=entriesWithEvolution.pipe(
      map((entryWithEvolution:EntryWithEvolution)=>
        {
          let chartDataSeries: ChartDataSeries={
            observableData: this.processEntryWithEvolution(entryWithEvolution,sortedDates), 
            label:entryWithEvolution.name};
          return chartDataSeries;
        }));
    this.colorsSelected=this.colorsAvailable.pipe(take(entries.length));
   }
}
