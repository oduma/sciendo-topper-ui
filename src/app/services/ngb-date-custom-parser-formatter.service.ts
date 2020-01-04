import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { isNumber } from 'util';

@Injectable({
  providedIn: 'root'
})
export class NgbDateCustomParserFormatterService extends NgbDateParserFormatter{
  parse(value: string): NgbDateStruct {
    if(value){
      const dateParts=value.trim().split('/');
      if(dateParts.length===1 && isNumber(dateParts[0])){
        return {day:Number(dateParts[0]), month:null, year:null};
      }
      if(dateParts.length===2 && isNumber(dateParts[0]) && isNumber(dateParts[1])){
        return {day:Number(dateParts[0]), month:Number(dateParts[1]), year:null};
      }
      if(dateParts.length===3 && isNumber(dateParts[0]) && isNumber(dateParts[1] && isNumber(dateParts[2]))){
        return {day:Number(dateParts[0]), month:Number(dateParts[1]), year:Number(dateParts[2])};
      }
    }
    return null;
  }
  format(date: NgbDateStruct): string {
    return date?`${isNumber(date.day)?this.padNumber(date.day,2):''}/${isNumber(date.month)?this.padNumber(date.month,2):''}/${isNumber(date.year)?date.year:''}`:'';
  }

  private padNumber(num:number, size:number) {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
}
