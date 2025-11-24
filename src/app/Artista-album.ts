export class ArtistaAlbum {
    nombreAlbum: string;
    anio: number;
    tracks: number;
    esfavorito: boolean;
    openTracks: any[];
    imagenAlbum: string;
    id?: number;
    constructor(nombreAlbum: string, anio: number, tracks: number, esfavorito: boolean, openTracks: any[], imagenAlbum: string, id?: number) {
      this.nombreAlbum = nombreAlbum;
      this.anio = anio;
      this.tracks = tracks;
      this.esfavorito = esfavorito;
      this.openTracks = openTracks;
      this.imagenAlbum = imagenAlbum;
      if (id) this.id = id;
    }
  }