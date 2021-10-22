import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  
  private counter = new BehaviorSubject(0);
  constructor() { }

  getCounter(){
    return this.counter;
  }

  setCounter(newCounter:any){
    // this.counter = newCounter xxxxx WRONG
    return this.counter.next(newCounter);
  }
  adding(newCounter:any){
    return this.counter.next(newCounter);
  }
  subtract(newCounter:any){
    return this.counter.next(newCounter-1);
  }
 
}
