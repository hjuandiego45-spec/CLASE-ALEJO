import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AlbumCardComponent } from './components/album-card/album-card.component';
import { AlbumListComponent } from './pages/album-list/album-list.component';

@NgModule({
  declarations: [
    AlbumCardComponent,
    AlbumListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [AlbumListComponent]
})
export class AlbumModule { }
