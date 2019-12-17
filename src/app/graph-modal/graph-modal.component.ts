import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GraphDataProviderService } from '../services/graph-data-provider.service';
import { EntrySelect } from '../models/entry-select';
import { EntrySelectorService } from '../services/entry-selector-service';

@Component({
  selector: 'app-graph-modal',
  templateUrl: './graph-modal.component.html',
  styleUrls: ['./graph-modal.component.css']
})
export class GraphModalComponent implements OnInit {
  entries: EntrySelect[];
  constructor(public activeModal: NgbActiveModal, entrySelectorService:EntrySelectorService) {
    entrySelectorService.selectedItems.subscribe(val=>this.entries=val);
   }

  ngOnInit() {
  }

}
