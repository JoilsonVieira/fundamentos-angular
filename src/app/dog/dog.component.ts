import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss'],
})
export class DogComponent implements OnInit {
  dog: any = {};

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.buscarImagem();
  }

  buscarImagem() {
    this.dogService.buscarImagemCachorro().subscribe((respostaApi) => {
      this.dog = respostaApi;
    });
  }
}
