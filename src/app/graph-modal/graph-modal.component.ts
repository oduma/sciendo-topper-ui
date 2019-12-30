import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EntrySelect } from '../models/entry-select';
import { SelectionMadeService } from '../services/selection-made.service';

@Component({
  selector: 'app-graph-modal',
  templateUrl: './graph-modal.component.html',
  styleUrls: ['./graph-modal.component.css']
})
export class GraphModalComponent implements OnInit {
  entries: EntrySelect[];
  constructor(public activeModal: NgbActiveModal, selectionMadeService:SelectionMadeService) {
    this.entries=selectionMadeService.Items;
   }

  ngOnInit() {
  }

}
