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
  private ontwikkerlaarsUrl = 'https://gameinfoapi.herokuapp.com/api/ontwikkelaars'

  getOntwikkelaars(): Observable<Ontwikkelaar[]> {
    return this.http.get<Ontwikkelaar[]>(this.ontwikkerlaarsUrl)
  }
  getOntwikkelaarByName(name):Observable<Ontwikkelaar>{
    console.log(name)
    console.log(this.http.get<Ontwikkelaar>(`${this.ontwikkerlaarsUrl}?name=${name}`,httpOptions))
    return this.http.get<Ontwikkelaar>(`${this.ontwikkerlaarsUrl}?name=${name}`,httpOptions)
  }

  addOntwikkelaar(ontwikkelaar:Ontwikkelaar): Observable<any>{
    console.log(ontwikkelaar)
    console.log("add ontwikkelaar service")
    return this.http.post(this.ontwikkerlaarsUrl,ontwikkelaar,httpOptions)

  }

}
