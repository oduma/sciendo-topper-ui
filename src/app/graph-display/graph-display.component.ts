import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { GraphDataProviderService } from '../services/graph-data-provider.service';
import { ChartDataSeries } from '../models/chart-data-series';

@Component({
  selector: 'app-graph-display',
  templateUrl: './graph-display.component.html',
  styleUrls: ['./graph-display.component.css']
})
export class GraphDisplayComponent implements OnInit {
  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];
  lineChartOptions = {
    responsive: true,
  };
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  
  lineChartColors: Color[] = [];
  private lightBackgroundColor: string='rgba(255,255,255,0.28)';

  constructor(private graphDataProvider: GraphDataProviderService) {

   }

  ngOnInit() {
    this.graphDataProvider.timeLineMilestones
      .subscribe((currentTimeLineMilestone: string)=>this.lineChartLabels.push(currentTimeLineMilestone));
    this.graphDataProvider.chartDataSeries.subscribe((chartDataSeries:ChartDataSeries)=>{
        let dataSeries:number[]=[];
        chartDataSeries.observableData.subscribe((val:number)=>dataSeries.push(val));
        this.lineChartData.push({data:dataSeries, label:chartDataSeries.label});
    });
    this.graphDataProvider.colorsSelected.subscribe((val:string)=>
      this.lineChartColors.push({borderColor:val,backgroundColor:this.lightBackgroundColor}))

  }



}
