import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private RequisicaoCep: HttpClient) {}

  buscarCep() {
     return this.RequisicaoCep.get('https://viacep.com.br/ws/17800059/json/');
  }
}
