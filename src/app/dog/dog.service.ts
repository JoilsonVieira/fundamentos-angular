import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  constructor(private httpClient: HttpClient) {}

  buscarImagemCachorro() {
    return this.httpClient.get('https://dog.ceo/api/breeds/image/random');
  }
}
