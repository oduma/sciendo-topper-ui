import { Injectable } from '@angular/core';
import { RepositoryService } from './repository-service';
import { tap, map } from 'rxjs/operators';
import { error } from 'util';
import { LastFmArtist } from '../models/last-fm-artist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistInfoService {

  lastFmArtist:Observable<LastFmArtist>;

  constructor(private repositoryService:RepositoryService) {
   }

  getPicture(){
    return "assets/artist-placeholder.png";
  }
  getInfo(artistName: string){
    this.lastFmArtist=this.repositoryService.getDataWithParamsFromLastFm<LastFmArtist>([artistName,"67b6145c521d4ca0e31ef35c3032d320"]);
  }

  getLastFmUrl(artistName: string){
    var name:string=encodeURIComponent(artistName);
    return `https://www.last.fm/music/${name}`;
  }
}
