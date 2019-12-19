import {Injectable} from'@angular/core'
import { Observable,of, Subject } from 'rxjs'
import { DayEntryEvolution } from '../models/day-entry-evolution'
import { RepositoryService } from './repository-service';
import { DateProvider } from './date-provider';
import { map, tap } from 'rxjs/operators';
@Injectable({
    providedIn:'root'
})
@Injectable()
export class DailySituationService {

    private dateFoundSource= new Subject<string>();
    dateFound$=this.dateFoundSource.asObservable();

    constructor(private repository: RepositoryService, 
        private dateProvider: DateProvider){
    }

    getDayEntries():Observable<DayEntryEvolution[]>{

        let formattedDate: string=`${this.dateProvider.date.getFullYear()}-${this.dateProvider.date.getMonth()+1}-${this.dateProvider.date.getDate()}`;
        console.log("for date: ", this.dateProvider.date);
        console.log("formatted date: ",formattedDate);
        return this.repository.getDataNoParams(`api/entries/getbydate/${formattedDate}`)
        .pipe(
            tap((r)=>this.dateFoundSource.next(r[0].date)),
            tap((r)=>console.log("going to server from daily list: ", r)),
            map(res=>{
            return res as DayEntryEvolution[]
        }));

    }

}
