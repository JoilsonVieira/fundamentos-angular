import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequisicaoApiService {
  
  constructor(private http: HttpClient) {}

  buscarUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
