import { Component, OnInit } from '@angular/core';
import { AlbumService } from './features/albums/services/album.service';
import { Album } from './features/albums/models/album.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  albums: Album[] = [];
  isLoading = true;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.albumService.getAllAlbums().subscribe({
        next: (data) => {
          this.albums = data;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error al cargar los álbumes:', error);
          this.isLoading = false;
        }
      });
    }, 3000);
  }
}
