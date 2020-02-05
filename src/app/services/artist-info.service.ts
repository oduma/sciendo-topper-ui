import { Injectable } from '@angular/core';
import { RepositoryService } from './repository-service';
import { LastFmArtist } from '../models/last-fm-artist';
import { Observable } from 'rxjs';
import { ServerConfigProviderService } from './server-config-provider.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistInfoService {

  lastFmArtist:Observable<LastFmArtist>;

  constructor(private repositoryService:RepositoryService, private serverConfigProvider:ServerConfigProviderService) {
   }

  getPicture(){
    return this.serverConfigProvider.serverConfig.relativeDefaultImagePath;
  }
  getInfo(artistName: string){
    this.lastFmArtist=this.repositoryService.getDataWithParamsFromLastFm<LastFmArtist>([artistName,this.serverConfigProvider.serverConfig.lastFmAppKey]);
  }

  getLastFmUrl(artistName: string){
    var name:string=encodeURIComponent(artistName);
    return `${this.serverConfigProvider.serverConfig.lastFmRootUrl}${name}`;
  }
}
