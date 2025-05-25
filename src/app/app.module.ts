import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RequisicaoApiComponent } from './requisicao-api/requisicao-api.component';

import { HttpClientModule } from '@angular/common/http';
import { CepComponent } from './cep/cep.component';
import { DogComponent } from './dog/dog.component';
import { AnimeComponent } from './anime/anime.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    RequisicaoApiComponent,
    CepComponent,
    DogComponent,
    AnimeComponent,
    NgModelComponent,
    ReactiveFormsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
