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
        return this.repository.getDataNoParams(`api/entries/getbyyear/${forYear}`)
        .pipe(map(res=>{
            return res as OverallEntryEvolution[]
        }));
    }

    getOverallEntriesWithouEvolution(forYear:number):Observable<OverallEntry[]>{
        return this.repository.getDataNoParams(`api/entries/getbyyearwithoutevolution/${forYear}`)
        .pipe(map(res=>{
            return res as OverallEntry[]
        }));

    }
}
