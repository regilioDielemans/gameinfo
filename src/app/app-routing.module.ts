import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { OntwikkelaarsComponent } from './ontwikkelaars/ontwikkelaars.component';
import { LoginComponent } from './login/login.component';
import { AddGameComponent } from './games/add-game/add-game.component';
import { AddOntwikkelaarComponent } from './ontwikkelaars/add-ontwikkelaar/add-ontwikkelaar.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component';

const routes: Routes = [
  { path: '', component:GamesComponent},
  { path:'login', component:LoginComponent},
  { path: 'games', component: GamesComponent },
  { path: 'games/addgame', component: AddGameComponent},
  { path: 'games/:title', component: GameDetailComponent},
  
  { path: 'ontwikkelaars' , component: OntwikkelaarsComponent},
  { path: 'ontwikkelaars/addontwikkelaar' , component: AddOntwikkelaarComponent}

];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
