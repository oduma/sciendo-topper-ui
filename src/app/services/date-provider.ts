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
        this.date=new Date("2019-04-12");
    };

    getHistoryYears():Observable<number[]>
    {
        return this.repositoryService.getDataNoParams('api/admin')
        .pipe(map(res=>{
            return res as number[]
        }));
    }
}
