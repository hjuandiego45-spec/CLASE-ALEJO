import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  loading = false;
  errorMessage = '';

  limit = 20;
  offset = 0;
  currentPage = 1;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.loading = true;
    this.errorMessage = '';

    this.pokemonService.getPokemons(this.limit, this.offset).subscribe({
      next: (data: Pokemon[]) => {
        this.pokemons = data;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Ocurrió un error al cargar los Pokémon.';
        this.loading = false;
      }
    });
  }

  nextPage(): void {
    this.offset += this.limit;
    this.currentPage++;
    this.loadPokemons();
  }

  previousPage(): void {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.currentPage--;
      this.loadPokemons();
    }
  }
}