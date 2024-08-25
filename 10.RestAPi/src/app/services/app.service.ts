import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { GenericHttpService } from './generic-http.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private _http: GenericHttpService, private __err: ErrorService) {}

  // get(){
  //  return this._http.get('https://jsonplaceholder.typicode.com/todos')
  // }
  get(callback: (res: any) => void) {
    this._http.get('todos', (res) => callback(res));
  }

  // add(model:any){
  //   return this._http.post('https://jsonplaceholder.typicode.com/todos',model)
  // }

  add(model: any, callback: (res: any) => void) {
    this._http.post('todos',model,res=>callback(res))
    
  }

}
