import {Position} from './position';
import { OverallEntry } from './overall-entry';

export interface DayEntry extends OverallEntry {
    dayPosition: Position;
    previousDayPosition: Position;
}
