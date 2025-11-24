export class Artista {
    id?: number;
    nombre: string;
    imagen: string;
  
    constructor(idOrNombre: number | string, nombreOrImagen?: string, imagenIfProvided?: string) {
      if (typeof idOrNombre === 'number') {
        this.id = idOrNombre;
        this.nombre = nombreOrImagen || '';
        this.imagen = imagenIfProvided || '';
      } else {
        this.nombre = idOrNombre;
        this.imagen = nombreOrImagen || '';
      }
    }
  }