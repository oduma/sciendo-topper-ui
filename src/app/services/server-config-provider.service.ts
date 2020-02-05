import { Injectable } from '@angular/core';
import { RepositoryService } from './repository-service';
import { ServerConfig } from '../models/server-config';

@Injectable({
  providedIn: 'root'
})
export class ServerConfigProviderService {

  serverConfig: ServerConfig;

  constructor(repository:RepositoryService) {
    repository.getDataNoParams<ServerConfig>("api/admin/serverconfig").subscribe((res)=>{this.serverConfig=res});

   }
}
