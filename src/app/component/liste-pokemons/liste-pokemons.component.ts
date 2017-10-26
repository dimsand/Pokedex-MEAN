import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../service/pokeapi.service'

@Component({
  selector: 'app-liste-pokemons',
  templateUrl: './liste-pokemons.component.html',
  styleUrls: ['./liste-pokemons.component.css']
})
export class ListePokemonsComponent implements OnInit {

  public loadingPokemons: boolean = false;
  private pokemons: Array<{}> = [{}];
  private nbPokemonsToRecup: number = 30;
  private percentLoadingPokemons: number = 0;
  private erreurRecupData: Boolean = false;

  constructor(private pokeapi:PokeapiService) { }

  filterPokemonByType(type){
    //this.pokemons = 
  }

  ngOnInit() {
    console.log(this.pokemons)
    this.loadingPokemons = true;
    for(let i=1; i<=this.nbPokemonsToRecup; i++){
      setTimeout(()=>{ 
        this.pokeapi.getPokemonByIdName(i)
        .then(data => {
          console.log(data);
          this.pokemons.push(data);
          var newPercent = Math.floor((this.pokemons.length/this.nbPokemonsToRecup) * 100);
          if(newPercent <= 100){
            this.percentLoadingPokemons = newPercent;
          }else{
            this.percentLoadingPokemons = 100;
            this.loadingPokemons = false;
          }
        })
        .catch(err => {
          console.log(err);
          this.erreurRecupData = true;
          this.loadingPokemons = false;
        })
      }, 1000);
    }
  }

}
