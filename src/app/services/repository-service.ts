import {Injectable} from '@angular/core';
import { DayEntry } from '../models/day-entry';
import { Observable, of, from } from 'rxjs';
import { OverallEntry } from '../models/overall-entry';
import { EntrySelect } from '../models/entry-select';
import { EntryWithEvolution } from '../models/entry-with-evolution';
@Injectable({
    providedIn:'root'
})
@Injectable()
export class RepositoryService {
    
    constructor(){

    }

    getEntriesByIds(entries:EntrySelect[]): Observable<EntryWithEvolution>
    {
        let tempEvolutionEntries: EntryWithEvolution[];
        tempEvolutionEntries=[
            {id:'1',name:'AC/DC',entryEvolution:[
                {date:new Date('2019-APR-10'),position:{positionRank:3,positionPoints:{rankPoints:24,lovedPoints:0, totalPoints:24}}},
                {date:new Date('2019-APR-11'),position:{positionRank:3,positionPoints:{rankPoints:24,lovedPoints:0, totalPoints:24}}},
                {date:new Date('2019-APR-12'),position:{positionRank:3,positionPoints:{rankPoints:24,lovedPoints:0, totalPoints:24}}},
                {date:new Date('2019-APR-13'),position:{positionRank:3,positionPoints:{rankPoints:24,lovedPoints:0, totalPoints:24}}},
                {date:new Date('2019-APR-17'),position:{positionRank:2,positionPoints:{rankPoints:14,lovedPoints:0, totalPoints:14}}},
                {date:new Date('2019-MAY-06'),position:{positionRank:1,positionPoints:{rankPoints:4,lovedPoints:20, totalPoints:24}}},
                {date:new Date('2019-MAY-10'),position:{positionRank:2,positionPoints:{rankPoints:24,lovedPoints:0, totalPoints:24}}},
                {date:new Date('2019-MAY-11'),position:{positionRank:2,positionPoints:{rankPoints:24,lovedPoints:0, totalPoints:24}}},
                {date:new Date('2019-MAY-12'),position:{positionRank:1,positionPoints:{rankPoints:5,lovedPoints:0, totalPoints:5}}},
                {date:new Date('2019-SEP-13'),position:{positionRank:1,positionPoints:{rankPoints:18,lovedPoints:20, totalPoints:38}}},
                {date:new Date('2019-SEP-14'),position:{positionRank:3,positionPoints:{rankPoints:18,lovedPoints:0, totalPoints:18}}},
                {date:new Date('2019-SEP-15'),position:{positionRank:3,positionPoints:{rankPoints:18,lovedPoints:0, totalPoints:18}}},
                {date:new Date('2019-OCT-01'),position:{positionRank:3,positionPoints:{rankPoints:44,lovedPoints:20, totalPoints:64}}},
                {date:new Date('2019-OCT-02'),position:{positionRank:2,positionPoints:{rankPoints:44,lovedPoints:0, totalPoints:44}}},
                {date:new Date('2019-OCT-03'),position:{positionRank:1,positionPoints:{rankPoints:44,lovedPoints:0, totalPoints:44}}},
            ]},
            {id:'2',name:'Black Sabath',entryEvolution:[
                {date:new Date('2019-JAN-10'),position:{positionRank:3,positionPoints:{rankPoints:24,lovedPoints:0, totalPoints:24}}},
                {date:new Date('2019-JAN-11'),position:{positionRank:3,positionPoints:{rankPoints:24,lovedPoints:0, totalPoints:24}}},
                {date:new Date('2019-JAN-12'),position:{positionRank:3,positionPoints:{rankPoints:24,lovedPoints:0, totalPoints:24}}},
                {date:new Date('2019-JAN-13'),position:{positionRank:3,positionPoints:{rankPoints:24,lovedPoints:0, totalPoints:24}}},
                {date:new Date('2019-JAN-17'),position:{positionRank:2,positionPoints:{rankPoints:14,lovedPoints:0, totalPoints:14}}},
                {date:new Date('2019-JAN-06'),position:{positionRank:1,positionPoints:{rankPoints:4,lovedPoints:20, totalPoints:24}}},
                {date:new Date('2019-MAR-10'),position:{positionRank:2,positionPoints:{rankPoints:24,lovedPoints:0, totalPoints:24}}},
                {date:new Date('2019-MAR-11'),position:{positionRank:2,positionPoints:{rankPoints:24,lovedPoints:0, totalPoints:24}}},
                {date:new Date('2019-SEP-09'),position:{positionRank:1,positionPoints:{rankPoints:5,lovedPoints:0, totalPoints:5}}},
                {date:new Date('2019-SEP-10'),position:{positionRank:1,positionPoints:{rankPoints:18,lovedPoints:20, totalPoints:38}}},
                {date:new Date('2019-SEP-11'),position:{positionRank:3,positionPoints:{rankPoints:18,lovedPoints:0, totalPoints:18}}},
                {date:new Date('2019-SEP-12'),position:{positionRank:2,positionPoints:{rankPoints:18,lovedPoints:20, totalPoints:38}}},
                {date:new Date('2019-NOV-01'),position:{positionRank:3,positionPoints:{rankPoints:44,lovedPoints:20, totalPoints:64}}},
                {date:new Date('2019-NOV-02'),position:{positionRank:2,positionPoints:{rankPoints:44,lovedPoints:0, totalPoints:44}}},
                {date:new Date('2019-NOV-03'),position:{positionRank:1,positionPoints:{rankPoints:44,lovedPoints:0, totalPoints:44}}},
            ]}];
        return from(tempEvolutionEntries);
    }
    getDayEntries():Observable<DayEntry[]>{
        let tempDayEntry: DayEntry[];
        tempDayEntry=[{
            id:'1',
            name:'AC/DC',
            dayPosition: {positionRank:1, positionPoints:{rankPoints:20,lovedPoints:20,totalPoints:40}},
            previousDayPosition:{positionRank:3,positionPoints:{rankPoints:15, lovedPoints:0, totalPoints: 15}},
            overallPosition: {positionRank:23, positionPoints:{rankPoints:30,lovedPoints:20,totalPoints:50}},
            previousDayOverallPosition:{positionRank:25,positionPoints:{rankPoints:25, lovedPoints:20,totalPoints:45}}
        },
        {
            id:'2',
            name:'Black Sabath',
            dayPosition: {positionRank:2, positionPoints:{rankPoints:10,lovedPoints:20,totalPoints:30}},
            previousDayPosition:{positionRank:1,positionPoints:{rankPoints:20,lovedPoints:10, totalPoints:30}},
            overallPosition:{positionRank:23,positionPoints:{rankPoints:30,lovedPoints:22,totalPoints:52}},
            previousDayOverallPosition:{positionRank:23,positionPoints:{rankPoints:55,lovedPoints:0, totalPoints:55}}
        },
        {
            id:'3',
            name:'Creedance Clearwater Revival',
            dayPosition: {positionRank:3, positionPoints:{rankPoints:10,lovedPoints:10,totalPoints:20}},
            previousDayOverallPosition:{positionRank:0,positionPoints:{rankPoints:0,lovedPoints:0,totalPoints:0}},
            overallPosition:{positionRank:23,positionPoints:{rankPoints:30,lovedPoints:22,totalPoints:52}},
            previousDayPosition:{positionRank:0,positionPoints:{rankPoints:0,lovedPoints:0,totalPoints:0}}
        }];
        const arraySource = of(tempDayEntry);
        return arraySource;
    }

    getOverallEntries(forYear: number):Observable<OverallEntry[]>{
        let tempOverallEntry: OverallEntry[];
        tempOverallEntry=[{
            id:'1',
            name:'American Football',
            overallPosition:{positionRank:1, positionPoints:{rankPoints:300,lovedPoints:0,totalPoints:300}},
            previousDayOverallPosition:{positionRank:1, positionPoints:{rankPoints:280, lovedPoints:0,totalPoints:280}}
        },
        {
            id:'2',
            name:'Black Keyes',
            overallPosition:{positionRank:2, positionPoints:{rankPoints:280,lovedPoints:20,totalPoints:300}},
            previousDayOverallPosition:{positionRank:5,positionPoints:{rankPoints:260,lovedPoints:0, totalPoints:260}}
        },
        {
            id:'3',
            name:'Cake',
            overallPosition:{positionRank:3,positionPoints:{rankPoints:200,lovedPoints:60,totalPoints:260}},
            previousDayOverallPosition:{positionRank:2,positionPoints:{rankPoints:200,lovedPoints:60,totalPoints:260}}
        }];
        const arraySource = of(tempOverallEntry);
        return arraySource;
    }
    getHistoryYears(date:Date):Observable<number[]>{
        return of([2018,2017,2016]);
    }

}
