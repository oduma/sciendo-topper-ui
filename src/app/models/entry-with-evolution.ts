import { Entry } from './entry';
import { EntryEvolution } from './entry-evolution';

export interface EntryWithEvolution extends Entry{
    entryEvolution:EntryEvolution[];
}
