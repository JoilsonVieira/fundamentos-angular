import { Component, OnInit } from '@angular/core';
import { CepService } from './cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss'],
})

export class CepComponent implements OnInit {

  cep: any = {};

  constructor(private requisicaoCepApi: CepService) {}

  ngOnInit(): void {
      this.requisicaoCepApi.buscarCep().subscribe((respostaCep) => {
        this.cep = respostaCep
        console.log(this.cep) 
      }) 
  }
}
