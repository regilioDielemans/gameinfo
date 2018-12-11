import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { Game } from 'src/app/game';
import {Location} from '@angular/common';
import { Ontwikkelaar } from 'src/app/ontwikkelaar';
import { OntwikkelaarService } from 'src/app/ontwikkelaar.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  ontwikkelaars:Ontwikkelaar[]


  constructor(
    private gameService: GameService,
    private ontwikkelaarService: OntwikkelaarService,
    private location: Location) { }

  ngOnInit() {
    this.getOntwikkelaars()
  }

  addGame(title : String,beschrijving : String,naam:String): void {
    
    const newGame = new Game(title,beschrijving,naam)
    this.gameService.addGame(newGame)
      .subscribe(() =>this.goBack());
      
  }
  getOntwikkelaars():void{
    this.ontwikkelaarService.getOntwikkelaars()
     .subscribe(ontwikkelaars => this.ontwikkelaars = ontwikkelaars);
   }

   goBack(){
    this.location.back();
  }
  

}
