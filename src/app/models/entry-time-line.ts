import { EntryBase } from './entry-base';
import { PositionAtDate } from './position-at-date';

export interface EntryTimeLine extends EntryBase{
    positionAtDates:PositionAtDate[]
}
