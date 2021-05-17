import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Scorersligue1Service {
  constructor(private _http:HttpClient) { }


  getAllscorersligue1() : Observable<any>{
    return this._http.get("http://localhost:3000/Ligue1Scorers");
  }
}
