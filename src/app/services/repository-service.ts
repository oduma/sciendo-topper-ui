import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url-service.service';
import { EntrySelect } from '../models/entry-select';
@Injectable({
    providedIn:'root'
})
@Injectable()
export class RepositoryService {

    
    constructor(private http: HttpClient, private envUrl:EnvironmentUrlService){

    }

    private createCompleteRoute(envAddress: string, route: string) 
    {
        let fullPath:string=`${envAddress}/${route}`;
        console.log("Address on server: ",fullPath)
        return fullPath;
    }


    getDataNoParams(route: string){
        return this.http.get(this.createCompleteRoute(this.envUrl.urlAddress,route));
    }

    getDataWithParams(route: string, entries: EntrySelect[]) {
        var routeWithParams:string;
        routeWithParams=entries.map(e=>encodeURIComponent(e.entryName)).join('&name=');
        return  this.getDataNoParams(`${route}?name=${routeWithParams}`);
      }
    
      getDataWithParamsFromLastFm(params: string[]){
          return this.http.get(this.createCompleteRoute(this.envUrl.lastFmUrlAddress,`?method=artist.getinfo&artist=${params[0]}&api_key=${params[1]}&format=json`))
      }

    
}
