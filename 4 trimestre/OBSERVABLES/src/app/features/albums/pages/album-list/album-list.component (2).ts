import { Component, Input } from '@angular/core';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.scss',
})
export class AlbumListComponent {
  @Input() albums: Album[] = [];
}
