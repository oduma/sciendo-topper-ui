import {Injectable} from'@angular/core'
import { Observable,of } from 'rxjs'
import { DayEntryEvolution } from '../models/day-entry-evolution'
import { RepositoryService } from './repository-service';
import { DateProvider } from './date-provider';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn:'root'
})
@Injectable()
export class DailySituationService {

    constructor(private repository: RepositoryService, 
        private dateProvider: DateProvider){
    }

    getDayEntries():Observable<DayEntryEvolution[]>{

        let formattedDate: string=`${this.dateProvider.date.getFullYear()}-${this.dateProvider.date.getMonth()+1}-${this.dateProvider.date.getDate()}`;
        console.log("for date: ", this.dateProvider.date);
        console.log("formatted date: ",formattedDate);
        return this.repository.getDataNoParams(`api/entries/getbydate/${formattedDate}`)
        .pipe(map(res=>{
            return res as DayEntryEvolution[]
        }));

    }

}
