import {Position} from './position';
import { OverallEntryEvolution } from './overall-entry-evolution';

export interface DayEntryEvolution
 extends OverallEntryEvolution {
    currentDayPosition: Position;
    previousDayPosition: Position;
}
