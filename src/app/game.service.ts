import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Game} from './game';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

};

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor( private http: HttpClient) { }
  private gameUrl = 'https://gameinfoapi.herokuapp.com/api/games';  // URL to web api


  getGames (): Observable<Game[]> {
    return this.http.get<Game[]>(this.gameUrl)
  }
  
  getGamebyTitle (title):Observable<Game>{
    console.log(title)
    return this.http.get<Game>(`${this.gameUrl}?title=${title}`,httpOptions)
  }

  addGame (game : Game): Observable<any> {
    console.log('game service')    
    return this.http.post(this.gameUrl, game ,httpOptions)
  }

  editGame(game: Game): Observable<any> {
    console.log('game service')    
    return this.http.put(this.gameUrl, game ,httpOptions)

  }
}
