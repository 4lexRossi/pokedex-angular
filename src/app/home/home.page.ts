import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  offset = 0;
  pokemon = [];
  constructor(private pokeService: PokemonService) {}

  ngOnInit() {
    this.loadPokemon();
  }
  loadPokemon(loadMore = false) {
    if (loadMore) {
      this.offset += 25;
    }
    this.pokeService.getPokemon(this.offset).subscribe(res => {
      console.log('result: ', res);
      if (this.offset > 0) {
        this.pokemon = [...this.pokemon, ...res];
      }else{
        this.pokemon = res;
      }
    })
  }

}
