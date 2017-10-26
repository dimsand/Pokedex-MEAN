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
  private error: String | Boolean = false;

  csvUrl: string = 'sample.csv';  // URL to web API
  csvData: any[] = [];

  constructor(private pokeapi:PokeapiService) { }

  searchPokemon(pokemon: Number | String): void{
    this.error = false;
    console.log(JSON.stringify(pokemon))
    if(JSON.stringify(pokemon) != ''){
      console.log(this.result)
      this.result = {};
      this.loadingResult = true;
      console.log("ESSAI DB");
      this.pokeapi.getPokemonFromDb(pokemon)
        .then(data => {
          console.log("RETOUR DB :");
          console.log(data);
          if(data != null){
            this.result = data;
            this.loadingResult = false;
          }else{
            console.log("ESSAI API");
            this.pokeapi.getPokemonFromApi(pokemon)
            .then(data => {
              console.log("RETOUR API");
              console.log(data);
              if(data != null){
                this.result = data;
                this.loadingResult = false;
                // Enregistrement du pokémon en base
                console.log("ENRESGISTREMENT DU POKEMON EN BASE")
                var pokemonToCreate: Object = {
                  id: data['id'],
                  name: data['name'],
                  //name_fr: data['name'],
                  sprites: data['sprites'],
                  types: data['types'],
                  weight: data['weight'],
                  height: data['height'],
                  //color: data['name'],
                  stats: data['stats'],
                  created_at: Date.now ,
                }
                console.log(pokemonToCreate)
                this.pokeapi.storePokemonInDb(pokemonToCreate)
                .then(data => {
                  console.log("STORE POKEMON OK");
                })
                .catch(function(err){
                  console.log("ERREUR ENREGISTREMENT DU POKEMON EN BASE")
                  console.log(err);
                })
              }else{

              }
            })
            .catch(err => {
              console.log(err);
              this.loadingResult = false;
              this.error = JSON.parse(err._body)
            })
          }
        })
        .catch(function(err){
          console.log(err);
        })
    }
  }

  ngOnInit() {
    
  }

}
