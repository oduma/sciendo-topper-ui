import { Entry } from './entry';
import {Position} from './position';

export interface OverallEntry extends Entry{
    overallPosition: Position;
    previousDayOverallPosition: Position;
}
