import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { AppRoutingModule } from './app-routing.module';
import { OntwikkelaarsComponent } from './ontwikkelaars/ontwikkelaars.component';
import { LoginComponent } from './login/login.component';
import { AddGameComponent } from './games/add-game/add-game.component';
import { AddOntwikkelaarComponent } from './ontwikkelaars/add-ontwikkelaar/add-ontwikkelaar.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component';
import { OntwikkelaarDetailComponent } from './ontwikkelaars/ontwikkelaar-detail/ontwikkelaar-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    OntwikkelaarsComponent,
    LoginComponent,
    AddGameComponent,
    AddOntwikkelaarComponent,
    GameDetailComponent,
    OntwikkelaarDetailComponent,
    
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
