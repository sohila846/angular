import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderServeService {
  private isLoading = new BehaviorSubject(false);
  constructor() { }
  getLoader(){
    return this.isLoading;
  }

  setLoader(newValue:any){
    this.isLoading.next(newValue);
  }
}
