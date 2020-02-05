import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { RepositoryService } from './repository-service';
import { isNumber } from 'util';
import { TimeInterval } from '../models/time-interval';
import { NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
    providedIn:'root'
})
@Injectable()
export class DateProvider {
    refreshHour:number;
    absoluteTimeInterval: Observable<TimeInterval>;
    executingDate:string;
    lastYear:string;
    constructor(private repositoryService: RepositoryService){
        this.refreshHour=18;
        this.absoluteTimeInterval = this.repositoryService.getDataNoParams<TimeInterval>("api/entries/gettimeinterval");
        this.absoluteTimeInterval.subscribe((d)=>{
            this.executingDate =  d.toDate;
            this.lastYear=d.toDate.split("-")[0];
        });
    }

    loadDate(newDate: string):NgbDateStruct{
            const dateParts=newDate.trim().split('-');
            return {year:Number(dateParts[0]), month: Number(dateParts[1]), day:Number(dateParts[2])};
    }

    format(date: Date): string {
        return date?`${isNumber(date.getFullYear())?date.getFullYear():''}-${isNumber(date.getMonth())?this.padNumber(date.getMonth()+1,2):''}-${isNumber(date.getDate())?this.padNumber(date.getDate(),2):''}`:'';
      }
    
      private padNumber(num:number, size:number) {
        let s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }
    
    getHistoryYears():Observable<number[]>
    {
        return this.repositoryService.getDataNoParams<number[]>('api/admin');
    }
}
