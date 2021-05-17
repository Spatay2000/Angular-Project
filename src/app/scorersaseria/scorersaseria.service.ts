import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScorersaseriaService {

  constructor(private _http:HttpClient) { }


  getAllSeriaScorers() : Observable<any>{
    return this._http.get("http://localhost:3000/SeriaScorers");
  }
}
