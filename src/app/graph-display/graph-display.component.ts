import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { GraphDataProviderService } from '../services/graph-data-provider.service';
import { DataForChart } from '../models/chart-data-series';
import { tap, map } from 'rxjs/operators';
import { EntrySelectorService } from '../services/entry-selector-service';
import { RepositoryService } from '../services/repository-service';
import { EntryTimeLine } from '../models/entry-time-line';
import { EntrySelect } from '../models/entry-select';
import { SelectionMadeService } from '../services/selection-made.service';

@Component({
  selector: 'app-graph-display',
  templateUrl: './graph-display.component.html',
  styleUrls: ['./graph-display.component.css']
})
export class GraphDisplayComponent implements OnInit {
  @Input()
  dataForChart:DataForChart;
  lineChartData: ChartDataSets[]=[{label:"Calculating...",data:[0]}];
  lineChartLabels: Label[] = ["Calculating..."];
  lineChartOptions = {
    responsive: true,
  };
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  
  lineChartColors: Color[] = [];

  constructor(private graphDataProvider: GraphDataProviderService, private repositoryService:RepositoryService, selectionMadeService:SelectionMadeService) {
    this.repositoryService.getDataWithParams('api/entries/gettimelines',selectionMadeService.Items)
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
