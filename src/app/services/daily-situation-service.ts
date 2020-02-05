import {Injectable} from'@angular/core'
import { Observable} from 'rxjs'
import { DayEntryEvolution } from '../models/day-entry-evolution'
import { RepositoryService } from './repository-service';
@Injectable({
    providedIn:'root'
})
@Injectable()
export class DailySituationService {

    constructor(private repository: RepositoryService){
    }

    getDayEntries(initialDate:string):Observable<DayEntryEvolution[]>{
        return this.repository.getDataNoParams<DayEntryEvolution[]>(`api/entries/getbydate/${initialDate}`);

    }

}
