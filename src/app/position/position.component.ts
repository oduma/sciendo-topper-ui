import { Component, OnInit, Input } from '@angular/core';
import { DayEntry } from '../models/day-entry';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  @Input() currentEntryRank:number;
  @Input() previousEntryRank:number;
  movement:string;
  constructor() { }

  ngOnInit() {
    let tempMovement=this.previousEntryRank-this.currentEntryRank;
    this.movement=(tempMovement>0)?`+${tempMovement}`:`${tempMovement}`;
  }
}
