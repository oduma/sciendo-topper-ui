import { ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';

export class DataForChart{
    timeLineMilestones:string[];
    dataSeries:ChartDataSets[];
    chartColors: Color[];
    constructor(){
        this.timeLineMilestones=[];
        this.dataSeries=[];
        this.chartColors=[];
    }
}
