import {Injectable} from '@angular/core';
import { EntrySelect } from '../models/entry-select';
import { Observable, Subject } from 'rxjs';
import {map, scan, tap} from 'rxjs/operators';

interface ISelectedItemsOperation extends Function {
    (selectItems: EntrySelect[]): EntrySelect[];
  }

const initialItems: EntrySelect[]=[];

@Injectable({providedIn:'root'})
@Injectable()
export class EntrySelectorService {
    selectedItems:Observable<EntrySelect[]>;
    private newSelectedItems: Subject<EntrySelect> = new Subject<EntrySelect>();
    private newDeSelectedItems: Subject<EntrySelect>= new Subject<EntrySelect>();
    private create: Subject<EntrySelect> = new Subject<EntrySelect>();
    private delete:Subject<EntrySelect>= new Subject<EntrySelect>();
    private updates:Subject<any>= new Subject<any>();
    
    constructor(){
        this.selectedItems = this.updates.pipe(
        scan((items: EntrySelect[],
               operation: ISelectedItemsOperation) => {
                 return operation(items);
               },
              initialItems));
    
        this.create.pipe(
        map( function(entrySelect: EntrySelect): ISelectedItemsOperation {
          return (selectedItems: EntrySelect[]) => {
              console.log("in the create pipe")
            return selectedItems.concat(entrySelect);
          };
        }))
        .subscribe(this.updates);
  
        this.newSelectedItems
            .subscribe(this.create);
        
        this.delete.pipe(
            tap((r)=>{
                console.log(r);
            }),
            map(
                function(entrySelect:EntrySelect):ISelectedItemsOperation{
                    return(selectedItems: EntrySelect[])=>{
                        let elementNo: number=-1;
                        for(let i=0;i<selectedItems.length-1 || elementNo==-1; i++)
                        {
                            if((<EntrySelect> selectedItems[i]).entryName===entrySelect.entryName)
                                elementNo=i;
                        }                        
                        let firstSlice: EntrySelect[]= selectedItems.slice(0,elementNo);
                        let secondSlice: EntrySelect[]= selectedItems.slice(elementNo+1);
                        return firstSlice.concat(secondSlice);
                    }
                }))
                .subscribe(this.updates);

        this.newDeSelectedItems
            .subscribe(this.delete);
    }

    handleEvent(e: any){
        if(e.target.checked)
        {
            console.log("in the handle Event: ",e.target.id);
            this.addEntry({entryName:e.target.id,selected:true});
        }
        else
        {
            console.log("in the handle Event: ", e.target.id);
            this.deleteEntry({entryName:e.target.id,selected:true})
        }
    }

    private deleteEntry(entrySelected: EntrySelect){
        console.log("in the deleteEntry: ", entrySelected);
        this.newDeSelectedItems.next(entrySelected);
    }
    private addEntry(entrySelected: EntrySelect){
        console.log("in the addEntry");
        this.newSelectedItems.next(entrySelected);
    }
}
