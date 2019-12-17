import {Position} from './position';
import { OverallEntry } from './overall-entry';
export interface OverallEntryEvolution extends OverallEntry{
    previousDayOverallPosition:Position;
}
