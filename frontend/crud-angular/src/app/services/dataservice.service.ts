import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }
  private _numberOfIds: number = 0;
  private _numberOfTaskIds: number = 0;

  get numberOfIds(): number {
    return this._numberOfIds;
  }

  set numberOfIds(value: number) {
    this._numberOfIds = value;
  }

  get numberOfTaskIds(): number {
    return this._numberOfTaskIds;
  }

  set numberOfTaskIds(value: number) {
    this._numberOfTaskIds = value;
  }
}
