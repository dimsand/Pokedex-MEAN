import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../service/pokeapi.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loadingResult: boolean = false;
  private result: Object = {};

  constructor(private pokeapi:PokeapiService) { }

  searchPokemon(pokemon: Number | String): void{
    console.log(this.result)
    this.result = {};
    this.loadingResult = true;
    this.pokeapi.getPokemonByIdName(pokemon)
      .then(data => {
        console.log(data);
        this.loadingResult = false;
        this.result = data;
      })
      .catch(function(err){
        console.log(err);
      })
  }

  ngOnInit() {
    
  }

}
