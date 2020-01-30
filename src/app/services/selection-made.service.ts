import { Injectable } from '@angular/core';
import { EntrySelect } from '../models/entry-select';

@Injectable({
  providedIn: 'root'
})
export class SelectionMadeService {
  Items: EntrySelect[];

  constructor() { }

  findIndex(name: string){
    for(var i=0;i<this.Items.length;i++){
      if(this.Items[i].entryName==name)
        return i;
    }
    return -1;
  }
}
