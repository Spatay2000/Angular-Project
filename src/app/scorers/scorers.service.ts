import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScorersService { 
  
  
  constructor(private _http:HttpClient) { }


  getAllscorersepl() : Observable<any>{
    return this._http.get("http://localhost:3000/eplScorers");
  }
}
