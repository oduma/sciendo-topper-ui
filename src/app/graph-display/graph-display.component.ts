import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color, BaseChartDirective } from 'ng2-charts';
import { GraphDataProviderService } from '../services/graph-data-provider.service';
import { DataForChart } from '../models/chart-data-series';
import { tap, map } from 'rxjs/operators';
import { RepositoryService } from '../services/repository-service';
import { EntryTimeLine } from '../models/entry-time-line';
import { SelectionMadeService } from '../services/selection-made.service';
import { EntryBase } from '../models/entry-base';
import { EntryBaseFormat } from '../models/entry-base-format';

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
    responsive: true
  };
  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';
  
  lineChartColors: Color[] = [];

  legendItems:EntryBaseFormat[];

  private classesAvailable: string[];

  constructor(private graphDataProvider: GraphDataProviderService, private repositoryService:RepositoryService, selectionMadeService:SelectionMadeService) {
    this.loadClassesAvailable();
    var tempName:string;
    var index:number=0;
    var baseEntries:EntryBase[];
    this.repositoryService.getDataWithParams('api/entries/gettimelines',selectionMadeService.Items)
    .pipe(tap((r)=>console.log("from the service: ",r)),
      map(res=>{
        return res as EntryTimeLine[];
    })).subscribe((val:EntryTimeLine[])=>{
      this.legendItems=val.map((e)=>{
        if(e.name!=tempName)
        {
          tempName=e.name;
          return {name:e.name, pictureUrl:e.pictureUrl, colorAndSizeClass:this.classesAvailable[index++]} as EntryBaseFormat;
        }
      })
      console.log("Entry Bases:",this.legendItems);
      var dataForChart:DataForChart=this.graphDataProvider.plotEntries(val);
      this.lineChartLabels=dataForChart.timeLineMilestones;
      this.lineChartData=<ChartDataSets[]>dataForChart.dataSeries;
      this.lineChartColors=dataForChart.chartColors;
    }    
  
    );
  }

   private loadClassesAvailable(){
    this.classesAvailable= [
      "cs-fa4dc3-32px",
      "cs-aed1fc-32px",
      "cs-fa9c43-32px",
      "cs-fa98eb-32px",
      "cs-red-32px",
      "cs-96bf0d-32px",
      "cs-3ac2c7-32px"
    ];
  }
  ngOnInit() {
  }



}
