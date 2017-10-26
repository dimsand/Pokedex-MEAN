// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

// Composants
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { Page404Component } from './component/page404/page404.component';
import { HomeComponent } from './component/home/home.component';
import { PokedexComponent } from './component/pokedex/pokedex.component';
import { ListePokemonsComponent } from './component/liste-pokemons/liste-pokemons.component'

// Services
import { PokeapiService } from './service/pokeapi.service'

// Routes
import { POKE_ROUTING } from './app.routes';

// Déclarations
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
    HomeComponent,
    PokedexComponent,
    ListePokemonsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    POKE_ROUTING
  ],
  providers: [
    PokeapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
