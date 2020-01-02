import { Component, OnInit,Input } from '@angular/core';
import { ArtistInfoService } from '../services/artist-info.service';

@Component({
  selector: 'app-artist-name',
  templateUrl: './artist-name.component.html',
  styleUrls: ['./artist-name.component.css']
})
export class ArtistNameComponent implements OnInit {

  @Input()
  artistName:string;
  artistPicture:string;
  private artistInfo:string;
  private artistLastFmUrl:string;
  constructor(public artistInfoService:ArtistInfoService) {
   }

  getInfo():string{
    if(!this.artistInfo){
      this.artistInfoService.getInfo(this.artistName);
      this.artistInfoService.lastFmArtist.subscribe((l)=>{
        this.artistInfo=l.artist.bio.summary.substring(0,100);
        if(this.artistInfo.trim().startsWith("<a href"))
          this.artistInfo="No information about this artist.";
      });
    }
    return this.artistInfo;
  }

  getLastFmUrl():string{
    if(!this.artistLastFmUrl){
      this.artistLastFmUrl=this.artistInfoService.getLastFmUrl(this.artistName);
    }
    return this.artistLastFmUrl;
  }
  ngOnInit() {
    this.artistPicture=this.artistInfoService.getPicture();
    //this.artistLastFmUrl=this.artistInfoService.getLastFmUrl(this.artistName);

  }

}
