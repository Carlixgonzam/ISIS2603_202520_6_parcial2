import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArtistaListado } from '../Artista-listado';

@Component({
  selector: 'app-Artista-listado',
  templateUrl: './Artista-listado.component.html',
  styleUrls: ['./Artista-listado.component.css']
})
export class ArtistaListadoComponent {
  @Input() canciones: ArtistaListado[] = [];
  @Output() toggleFavorite = new EventEmitter<ArtistaListado>();

  constructor() { }

  onToggle(track: ArtistaListado) {
    this.toggleFavorite.emit(track);
  }
}
