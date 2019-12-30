import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EntrySelect } from '../models/entry-select';
import { EntrySelectorService } from '../services/entry-selector-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GraphModalComponent } from '../graph-modal/graph-modal.component';
import { SelectionMadeService } from '../services/selection-made.service';

@Component({
  selector: 'app-graph-launcher',
  templateUrl: './graph-launcher.component.html',
  styleUrls: ['./graph-launcher.component.css']
})
export class GraphLauncherComponent implements OnInit {
  selectedEntries$:Observable<EntrySelect[]>;
  constructor(private entrySelectorService: EntrySelectorService, private modalService: NgbModal, private selectionMadeService:SelectionMadeService) { }

  ngOnInit() {
    console.log("Init on graph launcher");
    this.selectedEntries$=this.entrySelectorService.selectedItems;
  }

  open(entries: EntrySelect[]){
    this.selectionMadeService.Items=entries;
    this.modalService.open(GraphModalComponent,{size: 'lg'});
  }
}
