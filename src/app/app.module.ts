import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RequisicaoApiComponent } from './requisicao-api/requisicao-api.component';

import { HttpClientModule } from '@angular/common/http';
import { CepComponent } from './cep/cep.component';
import { DogComponent } from './dog/dog.component';
import { AnimeComponent } from './anime/anime.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RequisicaoApiComponent,
    CepComponent,
    DogComponent,
    AnimeComponent,
    NgModelComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
