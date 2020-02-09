import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  @Input() currentEntryRank:number;
  @Input() previousEntryRank:number;
  movement:string;
  isRanked:boolean=true;
  constructor() { }

  ngOnInit() {
    let tempMovement=this.previousEntryRank-this.currentEntryRank;
    this.movement=(tempMovement>0)?`+${tempMovement}`:`${tempMovement}`;
    this.isRanked=(this.currentEntryRank<9999);
  }

  getPositionClass(){
    switch (this.currentEntryRank) {
      case 1:
        return "number-one";
      case 2:
        return "number-two";
       case 3:
         return "number-three";
      default:
         return "lower-positions";
    }
  }

}
