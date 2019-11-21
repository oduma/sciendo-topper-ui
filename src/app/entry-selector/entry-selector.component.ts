import { Component, OnInit, Input, Output} from '@angular/core';
import { EntrySelectorService } from '../services/entry-selector-service';

@Component({
  selector: 'app-entry-selector',
  templateUrl: './entry-selector.component.html',
  styleUrls: ['./entry-selector.component.css']
})
export class EntrySelectorComponent implements OnInit {
  @Input() entryId:string;
  constructor(private entrySelectorService: EntrySelectorService) { }

  ngOnInit() {
  }

  checkValue(e:any): boolean
  {
    this.entrySelectorService.handleEvent(e);
    return true;
  }
}
