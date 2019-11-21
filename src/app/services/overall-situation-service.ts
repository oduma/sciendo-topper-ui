import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { OverallEntry } from '../models/overall-entry';
import { RepositoryService } from './repository-service';
import { DateProvider } from './date-provider';

@Injectable({providedIn:'root'})
@Injectable()
export class OverallSituationService {

    constructor(public repository: RepositoryService){
    }

    getOverallEntries(forYear:number):Observable<OverallEntry[]>{
        return this.repository.getOverallEntries(forYear);
    }
}
