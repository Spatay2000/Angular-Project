import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Ligue1Service {
  constructor(private _http:HttpClient) { }


  getAllligeu1() : Observable<any>{
    return this._http.get(" http://localhost:3000/Ligue1");
  }
}

