import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/game.service';
import { Game } from 'src/app/game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game: Game;
  edit: Boolean = false;
  

  constructor(private gameService: GameService,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getGame()
  }
  setEdit():void{
    this.edit = true;
  }

  getGame(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.gameService.getGamebyTitle(title)
      .subscribe(game => this.game = game);
  }

  editGame():void{
    this.edit = false;
    this.gameService.editGame(this.game).subscribe()
  }
  

}
