import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BundesligaService {

  constructor(private _http:HttpClient) { }


  getAllbundesliga() : Observable<any>{
    return this._http.get(" http://localhost:3000/Bundesliga");
  }
}

