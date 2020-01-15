import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { RepositoryService } from './repository-service';
import { map, tap } from 'rxjs/operators';
import { isNumber } from 'util';
import { TimeInterval } from '../models/time-interval';
import { NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
    providedIn:'root'
})
//@Injectable()
export class DateProvider {
    absoluteTimeInterval: Observable<TimeInterval>;
    public executingDate:string;
    constructor(private repositoryService: RepositoryService){
        this.absoluteTimeInterval = this.repositoryService.getDataNoParams("api/entries/gettimeinterval")
        .pipe(
            tap((r)=>console.log("dateprovider went to the server: ", r)),
            map(res=>{
            return res as TimeInterval;
        }));
//        this.executingDate = this.absoluteTimeInterval.pipe(map((d)=>{return d.toDate}));
        this.absoluteTimeInterval.subscribe((d)=>{this.executingDate =  d.toDate});

}

    public loadDate(newDate: string):NgbDateStruct{
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
        return this.repositoryService.getDataNoParams('api/admin')
        .pipe(map(res=>{
            return res as number[]
        }));
    }
}
