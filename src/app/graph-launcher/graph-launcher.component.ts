import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EntrySelect } from '../models/entry-select';
import { EntrySelectorService } from '../services/entry-selector-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GraphModalComponent } from '../graph-modal/graph-modal.component';
import { GraphDataProviderService } from '../services/graph-data-provider.service';

@Component({
  selector: 'app-graph-launcher',
  templateUrl: './graph-launcher.component.html',
  styleUrls: ['./graph-launcher.component.css']
})
export class GraphLauncherComponent implements OnInit {
  selectedEntries$:Observable<EntrySelect[]>;
  constructor(private entrySelectorService: EntrySelectorService, private modalService: NgbModal, public graphDataProvider: GraphDataProviderService) { }

  ngOnInit() {
    this.selectedEntries$=this.entrySelectorService.selectedItems;
  }

  open(entries: EntrySelect[]){
    console.log(entries);
    this.graphDataProvider.plotEntries(entries);
    this.modalService.open(GraphModalComponent,{size: 'lg'});
  }
}
