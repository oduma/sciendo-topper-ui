import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { GraphDataProviderService } from '../services/graph-data-provider.service';
import { DataForChart } from '../models/chart-data-series';
import { tap, map } from 'rxjs/operators';
import { EntrySelectorService } from '../services/entry-selector-service';
import { RepositoryService } from '../services/repository-service';
import { EntryTimeLine } from '../models/entry-time-line';
import { EntrySelect } from '../models/entry-select';

@Component({
  selector: 'app-graph-display',
  templateUrl: './graph-display.component.html',
  styleUrls: ['./graph-display.component.css']
})
export class GraphDisplayComponent implements OnInit {
  lineChartData: ChartDataSets[]=[{label:"aaa",data:[1]}];
  lineChartLabels: Label[] = ["aaa"];
  lineChartOptions = {
    responsive: true,
  };
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  
  lineChartColors: Color[] = [];

  constructor(private graphDataProvider: GraphDataProviderService, private entrySelectorService:EntrySelectorService,private repositoryService:RepositoryService) {
    var selectedEntries:EntrySelect[];
    this.entrySelectorService.selectedItems.subscribe(val=>selectedEntries=val);
    this.repositoryService.getDataWithParams('api/entries/gettimelines',selectedEntries)
    .pipe(tap((r)=>console.log("from the service: ",r)),
      map(res=>{
        return res as EntryTimeLine[];
    })).subscribe((val)=>{
      var dataForChart:DataForChart=this.graphDataProvider.plotEntries(val);
      this.lineChartLabels=dataForChart.timeLineMilestones;
      this.lineChartData=<ChartDataSets[]>dataForChart.dataSeries;
      console.log("maybe here: ", this.lineChartData);
      this.lineChartColors=dataForChart.chartColors;
    }    
  
    );
   }
  ngOnInit() {
  }



}
