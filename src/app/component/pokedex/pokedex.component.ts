import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../service/pokeapi.service'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  public loadingPokemons: boolean = false;
  private percentLoadingPokemons: number = 0;
  private pokemons: Array<{}> = [{}];
  private erreurRecupData: Boolean = false;
  private errApiPlus;

  constructor(private pokeapi:PokeapiService) { }

  ngOnInit() {
    this.loadingPokemons = true;
    this.pokeapi.getAllPokemonFromDb()
    .then(data => {
      console.log("RETOUR DB :");
      console.log(data);
      this.pokemons.push(data);
      console.log(this.pokemons)
      this.loadingPokemons = false;
      this.percentLoadingPokemons = 100;
    })
    .catch(function(err){
      console.log(err);
      this.errApi.push(err);
      this.errApiPlus = JSON.parse(err._body);
      this.erreurRecupData = true;
      this.loadingPokemons = false;
    })
  }

}
