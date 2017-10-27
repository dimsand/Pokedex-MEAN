import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokeapiService {

  private API_URL = 'https://pokeapi.co/api/v2/pokemon/';
  private BASE_BDD_URL = 'http://localhost:3000';

  constructor(private http: Http) { }

  //////////////////////////////////////////////////////////
  // From DATABASE

  getPokemonFromDb(pokemon) {
    return new Promise((resolve, reject) => {
      var BDD_URL = this.BASE_BDD_URL+'/pokemon/name/'+pokemon
      if(Number(pokemon)){
        BDD_URL = this.BASE_BDD_URL+'/pokemon/id/'+pokemon;
      }
      console.log("BDD URL : " + BDD_URL);
      this.http.get(BDD_URL)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAllPokemonFromDb(){
    return new Promise((resolve, reject) => {
      var BDD_URL = this.BASE_BDD_URL+'/pokemon/'
      console.log("BDD URL : " + BDD_URL);
      this.http.get(BDD_URL)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  storePokemonInDb(pokemon) {
    return new Promise((resolve, reject) => {
      var BDD_URL = this.BASE_BDD_URL+"/pokemon"
      console.log("BDD URL : " + BDD_URL);
      this.http.post(BDD_URL, pokemon)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  //////////////////////////////////////////////////////////
  // From API pokeapi.co

  getPokemonFromApi(pokemon) {
    let apiURL = this.API_URL + pokemon;
    return new Promise((resolve, reject) => {
      console.log("API URL : " + apiURL);
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            console.log(res);
            resolve(res.json());
          },
          err => { // Error
            reject(err);
          }
        );
    });
  }

}
