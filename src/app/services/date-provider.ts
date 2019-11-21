import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { RepositoryService } from './repository-service';


@Injectable({
    providedIn:'root'
})
@Injectable()
export class DateProvider {
    date:Date;
    historyYears: Observable<number[]>;
    constructor(private repositoryService: RepositoryService){
        this.date=new Date();
        this.historyYears=repositoryService.getHistoryYears(this.date);
    };
}
