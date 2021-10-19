import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkcount'
})
export class CheckcountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    if (value===0){
    return "Sold out !";}
    else{
      return "Available";
    }
  }

}
