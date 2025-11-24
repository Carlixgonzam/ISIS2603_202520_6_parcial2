export class ArtistaListado {
    id?: number;
    numCancion: number;
    minutos: number;
    nombreCancion: string;
    favorito: boolean;
  
    constructor(numCancion: number, minutos: number, nombreCancion: string, favorito: boolean, id?: number) {
      this.numCancion = numCancion;
      this.minutos = minutos;
      this.nombreCancion = nombreCancion;
      this.favorito = favorito;
      if (id !== undefined) this.id = id;
    }
  }