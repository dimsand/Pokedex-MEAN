import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokeapiService {

  constructor(private http: Http) { }

  getPokemonByIdName(pokemon) { 
    return new Promise((resolve, reject) => {
      let apiURL = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;

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
