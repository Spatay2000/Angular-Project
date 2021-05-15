import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LaLigaServiceService {

  constructor(private _http:HttpClient) { }


  getAlllaliga() : Observable<any>{
    return this._http.get("http://localhost:3000/laliga");
  }
}
