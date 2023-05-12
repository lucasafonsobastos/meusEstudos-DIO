import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonData } from 'src/models/pokemonData';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  pokemon:PokemonData;

  constructor(private pokeService:PokemonService){
    this.pokemon = {
      id: 1,
      name: '',
      sprites: { other: {home: {front_default:''}}},
      types:[]
    }
  }


  ngOnInit(): void {
    this.pokeService.getPokemon('charizard').subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
      },
      error: (err) => console.log(err)
    })
  }

}
