import {Injectable} from'@angular/core'
import { Observable,of } from 'rxjs'
import { DayEntry } from '../models/day-entry'
import { RepositoryService } from './repository-service';
@Injectable({
    providedIn:'root'
})
@Injectable()
export class DailySituationService {
    dayEntries: Observable<DayEntry[]>;

    constructor(public repository: RepositoryService){
        this.dayEntries=this.repository.getDayEntries();
    }

}
