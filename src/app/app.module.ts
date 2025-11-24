import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ArtistaAlbumComponent } from '../Artista-album/Artista-album.component';
import { ArtistaListadoComponent } from './Artista-listado/Artista-listado.component';
import { ArtistasComponent } from './artistas/artistas.component';
@NgModule({
  declarations: [			AppComponent,
      ArtistaAlbumComponent,
      ArtistaListadoComponent,
      ArtistasComponent
   ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
