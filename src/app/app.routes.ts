import { RouterModule, Routes }   from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { PokedexComponent } from './component/pokedex/pokedex.component';
import { ListePokemonsComponent } from './component/liste-pokemons/liste-pokemons.component'
import { Page404Component } from './component/page404/page404.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'pokedex',
        component: PokedexComponent
    },
    {
        path: 'liste',
        component: ListePokemonsComponent
    },
    {
        path: '**',
        component: Page404Component
    } 
];

export const POKE_ROUTING = RouterModule.forRoot(routes);