import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ArtistaAlbum } from '../app/Artista-album';

@Component({
  selector: 'app-Artista-album',
  templateUrl: './Artista-album.component.html',
  styleUrls: ['./Artista-album.component.css']
})
export class ArtistaAlbumComponent  {
  @Input() album!: ArtistaAlbum;
  @Output() openTracks = new EventEmitter<ArtistaAlbum>();
  @Output() toggleFavorite = new EventEmitter<ArtistaAlbum>();

  abrir() {
    this.openTracks.emit(this.album);
  }

  toggle() {
    this.toggleFavorite.emit(this.album);
  }

}
