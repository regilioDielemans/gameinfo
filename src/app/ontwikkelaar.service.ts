import { Injectable } from '@angular/core';
import { Ontwikkelaar } from './ontwikkelaar';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OntwikkelaarService {

  constructor(private http: HttpClient) { }
  private ontwikkerlaarsUrl = 'http://localhost:3000/api/ontwikkelaars'

  getOntwikkelaars(): Observable<Ontwikkelaar[]> {
    return this.http.get<Ontwikkelaar[]>(this.ontwikkerlaarsUrl)
  }

  addOntwikkelaar(ontwikkelaar:Ontwikkelaar): Observable<any>{
    console.log(ontwikkelaar)
    console.log("add ontwikkelaar service")
    return this.http.post(this.ontwikkerlaarsUrl,ontwikkelaar,httpOptions)

  }
}
