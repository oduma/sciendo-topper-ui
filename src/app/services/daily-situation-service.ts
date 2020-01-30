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

    constructor(private repository: RepositoryService){
    }

    getDayEntries(initialDate:string):Observable<DayEntryEvolution[]>{

        console.log("for date: ", initialDate);
        return this.repository.getDataNoParams<DayEntryEvolution[]>(`api/entries/getbydate/${initialDate}`);

    }

}
