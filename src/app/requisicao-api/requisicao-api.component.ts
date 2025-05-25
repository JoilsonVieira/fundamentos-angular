import { Component, OnInit } from '@angular/core';

import { RequisicaoApiService } from './requisicao-api.service';

@Component({
  selector: 'app-requisicao-api',
  templateUrl: './requisicao-api.component.html',
  styleUrls: ['./requisicao-api.component.scss'],
})
export class RequisicaoApiComponent implements OnInit {
  usuarios: any = [];

  constructor(private requisicaoApiService: RequisicaoApiService) {}

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.requisicaoApiService.buscarUsuarios().subscribe((respostaAPI) => {
      console.log(respostaAPI)
      this.usuarios = respostaAPI;
    });
  }
}
