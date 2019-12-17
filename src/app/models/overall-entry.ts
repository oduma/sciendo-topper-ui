import { EntryBase } from './entry-base';
import {Position} from './position';

export interface OverallEntry extends EntryBase{
    currentOverallPosition: Position;
}
