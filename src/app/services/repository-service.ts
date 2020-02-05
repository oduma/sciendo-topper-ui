import {Injectable} from '@angular/core';
import { EnvironmentUrlService } from './environment-url-service.service';
import { EntrySelect } from '../models/entry-select';
import { Observable } from 'rxjs';
import { HttpClientService } from './http-client.service';
@Injectable({
    providedIn:'root'
})
@Injectable()
export class RepositoryService {

    cacheLimit:number;
    constructor(private http: HttpClientService, private envUrl:EnvironmentUrlService){
        this.cacheLimit=10;

    }

    private createCompleteRoute(envAddress: string, route: string) 
    {
        let fullPath:string=`${envAddress}/${route}`;
        return fullPath;
    }

    async getDataNoParamsSync<T>(route: string):Promise<T>{
        return await this.getDataNoParams(route)
        .toPromise()
        .then(res=> {return res as T});
    }
    getDataNoParams<T>(route: string):Observable<T>{
        return this.http.get<T>({url:this.createCompleteRoute(this.envUrl.urlAddress,route), cacheMins:this.cacheLimit});
    }

    getDataWithParams<T>(route: string, entries: EntrySelect[]):Observable<T> {
        var routeWithParams:string;
        routeWithParams=entries.map(e=>encodeURIComponent(e.entryName)).join('&name=');
        return  this.getDataNoParams<T>(`${route}?name=${routeWithParams}`);
      }
    
    getDataWithParamsFromLastFm<T>(params: string[]):Observable<T>{
          return this.http.get<T>({url:this.createCompleteRoute(this.envUrl.lastFmUrlAddress,`?method=artist.getinfo&artist=${params[0]}&api_key=${params[1]}&format=json`), cacheMins:this.cacheLimit});
    }
}
