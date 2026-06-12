import { Component, Input } from '@angular/core';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss',
})
export class AlbumCardComponent {
  @Input() album!: Album;
}
