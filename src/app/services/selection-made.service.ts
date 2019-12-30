import { Injectable } from '@angular/core';
import { EntrySelect } from '../models/entry-select';

@Injectable({
  providedIn: 'root'
})
export class SelectionMadeService {
  Items: EntrySelect[];

  constructor() { }
}
