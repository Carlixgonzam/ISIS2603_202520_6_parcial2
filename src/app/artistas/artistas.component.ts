import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Artista } from '../Artista';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent {

  @Input() artistas: Artista[] = [];
  @Output() artistaSeleccionado = new EventEmitter<Artista>();

  seleccionar(art: Artista) {
    this.artistaSeleccionado.emit(art);
  }

}
