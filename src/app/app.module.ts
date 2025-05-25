import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RequisicaoApiComponent } from './requisicao-api/requisicao-api.component';

import { HttpClientModule } from '@angular/common/http';
import { CepComponent } from './cep/cep.component';
import { DogComponent } from './dog/dog.component';
import { AnimeComponent } from './anime/anime.component';

@NgModule({
  declarations: [
    AppComponent,
    RequisicaoApiComponent,
    CepComponent,
    DogComponent,
    AnimeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
