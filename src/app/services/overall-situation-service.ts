import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { OverallEntryEvolution } from '../models/overall-entry-evolution';
import { RepositoryService } from './repository-service';
import { map } from 'rxjs/operators';
import { OverallEntry } from '../models/overall-entry';

@Injectable({providedIn:'root'})
@Injectable()
export class OverallSituationService {

    constructor(public repository: RepositoryService){
    }

    getOverallEntries(forYear:number):Observable<OverallEntryEvolution[]>{
        return this.repository.getDataNoParams<OverallEntryEvolution[]>(`api/entries/getbyyear/${forYear}`);
    }

    getOverallEntriesWithouEvolution(forYear:number):Observable<OverallEntry[]>{
        return this.repository.getDataNoParams<OverallEntry[]>(`api/entries/getbyyearwithoutevolution/${forYear}`);

    }
}
