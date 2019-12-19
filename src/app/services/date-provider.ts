import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { RepositoryService } from './repository-service';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn:'root'
})
@Injectable()
export class DateProvider {
    date:Date;
    constructor(private repositoryService: RepositoryService){
        this.date=new Date();
    };

    getHistoryYears():Observable<number[]>
    {
        return this.repositoryService.getDataNoParams('api/admin')
        .pipe(map(res=>{
            return res as number[]
        }));
    }
}
