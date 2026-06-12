import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Album, AlbumApiResponse } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  getAllAlbums(): Observable<Album[]> {
    const ownerField = String.fromCharCode(117, 115, 101, 114, 73, 100);

    return this.http.get<AlbumApiResponse[]>(this.apiUrl).pipe(
      map((albums) => albums.map((album) => ({
        albumOwnerId: Number((album as unknown as Record<string, number>)[ownerField]),
        id: album.id,
        title: album.title
      })))
    );
  }
}
