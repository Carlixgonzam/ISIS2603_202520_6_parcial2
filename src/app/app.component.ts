import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artista } from './Artista';
import { ArtistaAlbum } from './Artista-album';
import { ArtistaListado } from './Artista-listado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  artistas: Artista[] = [];
  albums: ArtistaAlbum[] = [];
  selectedArtist?: Artista;
  selectedAlbumTracks: ArtistaListado[] = [];

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadArtistas();
  }

  loadArtistas() {
    this.http.get<Artista[]>(`${this.baseUrl}/artistas`).subscribe(
      data => this.artistas = data,
      err => {
        console.error('Error cargando artistas, usando datos de ejemplo', err);
        this.artistas = [
          new Artista(1, "Guns N' Roses", 'assets/images/artist_3qm84nBOXUEQ2vnTfUTTFC.jpg'),
          new Artista(2, 'Rammstein', 'assets/images/artist_6wWVKhxIU2cEi0K81v7HvP.jpg')
        ];
      }
    );
  }

  onArtistSelected(art: Artista) {
    this.selectedArtist = art;
    this.loadAlbumsForArtist(art);
  }

  loadAlbumsForArtist(art: Artista) {
    const url = art.id
      ? `${this.baseUrl}/artistas/${art.id}/albums`
      : `${this.baseUrl}/albums?nombreArtista=${encodeURIComponent(art.nombre)}`;

    this.http.get<ArtistaAlbum[]>(url).subscribe(
      data => this.albums = data,
      err => {
        console.error('Error cargando albums, usando ejemplo', err);
        this.albums = [
          new ArtistaAlbum('Use Your Illusion I (Deluxe Edition)', 1991, 19, true, [], 'assets/images/album_33HYdYXXadqsdZ1NsYmS6o.jpg', 1),
          new ArtistaAlbum('Chinese Democracy', 2008, 12, false, [], 'assets/images/album_0suNLpB9xraAv1FcdlITjQ.jpg', 2)
        ];
      }
    );
  }

  onOpenTracks(album: ArtistaAlbum) {
    if (album.openTracks && album.openTracks.length) {
      this.selectedAlbumTracks = album.openTracks as ArtistaListado[];
      return;
    }

    const url = album.id
      ? `${this.baseUrl}/albums/${album.id}/tracks`
      : `${this.baseUrl}/tracks?album=${encodeURIComponent(album.nombreAlbum)}`;

    this.http.get<ArtistaListado[]>(url).subscribe(
      data => this.selectedAlbumTracks = data,
      err => {
        console.error('Error cargando tracks, usando ejemplo', err);
        this.selectedAlbumTracks = [
          new ArtistaListado(1, 4.43, 'Chinese Democracy', true, 101),
          new ArtistaListado(2, 3.36, "Shackler's Revenge", false, 102)
        ];
      }
    );
  }

  onToggleAlbumFavorite(album: ArtistaAlbum) {
    album.esfavorito = !album.esfavorito;
    const url = album.id ? `${this.baseUrl}/albums/${album.id}/favorite` : `${this.baseUrl}/albums/favorite`;
    this.http.post(url, { id: album.id, esfavorito: album.esfavorito }).subscribe({
      next: () => {},
      error: err => {
        console.error('Error notificando favorito album', err);
      }
    });
  }

  onToggleTrackFavorite(track: ArtistaListado) {
    track.favorito = !track.favorito;
    const url = track.id ? `${this.baseUrl}/tracks/${track.id}/favorite` : `${this.baseUrl}/tracks/favorite`;
    this.http.post(url, { id: track.id, favorito: track.favorito }).subscribe({
      next: () => {},
      error: err => {
        console.error('Error notificando favorito track', err);
      }
    });
  }
}