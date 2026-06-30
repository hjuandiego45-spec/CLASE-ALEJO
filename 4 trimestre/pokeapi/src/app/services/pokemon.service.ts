import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import {
  Pokemon,
  PokemonDetailResponse,
  PokemonListResponse
} from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemons(limit: number, offset: number): Observable<Pokemon[]> {
    return this.http
      .get<PokemonListResponse>(`${this.apiUrl}?limit=${limit}&offset=${offset}`)
      .pipe(
        switchMap((response: PokemonListResponse) => {
          const requests: Observable<PokemonDetailResponse>[] = response.results.map(pokemon =>
            this.http.get<PokemonDetailResponse>(pokemon.url)
          );

          return forkJoin(requests);
        }),
        map((details: PokemonDetailResponse[]) =>
          details.map((pokemon: PokemonDetailResponse) => ({
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other['official-artwork'].front_default
              ?? pokemon.sprites.front_default
              ?? '',
            height: pokemon.height,
            weight: pokemon.weight,
            baseExperience: pokemon.base_experience,
            types: pokemon.types.map(type => type.type.name),
            abilities: pokemon.abilities.map(ability => ability.ability.name),
            stats: pokemon.stats.map(stat => ({
              name: stat.stat.name,
              value: stat.base_stat
            }))
          }))
        )
      );
  }
}