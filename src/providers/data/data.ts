import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(private _http: Http) {
    console.log('Hello DataProvider Provider');
  }

  getUserPlan(){
    return this._http.get('../assets/mock/plan-example.json');
  }

}
