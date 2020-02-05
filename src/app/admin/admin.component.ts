import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../services/repository-service';
import { CacheService } from '../services/cache.service';
import { DateProvider } from '../services/date-provider';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  changeHappened: boolean;
  constructor(public repositoryService: RepositoryService, public dateProvider:DateProvider, public cacheService: CacheService) {
    this.changeHappened=false;
   }

  ngOnInit() {
  }

  clearAllCache(){
    this.cacheService.cleanLocalStorage();
  }
}
