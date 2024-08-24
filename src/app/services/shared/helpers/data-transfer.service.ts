import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private data$ = new BehaviorSubject<any>('');

  public setData(data: any): void {
    this.data$.next(data);
  }
  public getMessage() {
    return this.data$.asObservable();
  }

  constructor() { }
}
