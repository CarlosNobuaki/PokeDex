import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPokemonService } from '../services/api-pokemon.service';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {

  pokemon: any = null;
  currentDate = new Date().toLocaleString();

  constructor(
    private route: ActivatedRoute,
    private pokemonService: ApiPokemonService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      if (this.pokemonService.pokemons.length) {
        this.pokemon = this.pokemonService.pokemons.find(i => i.name === params['name']);
      }

      this.pokemonService.get(params['name']).subscribe(response => {
        this.pokemon = response;
      }, error => console.log('Error Occurred:', error));
    });
  }

  salvarCaptura(): void {
    const movesName = this.pokemon.moves.map((move:any) => move.move.name)
    const data = {
      currentDate: this.currentDate,
      pokemonName: this.pokemon.name,
      attackList: movesName,
    }
    console.log(data)
    window.history.back()
  }
}
