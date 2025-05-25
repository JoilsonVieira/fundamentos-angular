import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) {      
  } 
  
  acessarHttp(){
    return this.http.get('https://api.jikan.moe/v4/anime/38000')
  }
}
