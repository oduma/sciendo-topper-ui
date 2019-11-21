import { Observable } from 'rxjs';

export interface ChartDataSeries {
    observableData:Observable<number>;
    label:string;

}
