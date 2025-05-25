import { Component, OnInit } from '@angular/core';
import { AnimeService } from './anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {
    constructor(private requisicaoAnimeApi: AnimeService){}

    dadosAnime: any = {};

    ngOnInit(): void {
        this.requisicaoAnimeApi.acessarHttp().subscribe((retornoAPI: any) => {
          this.dadosAnime = retornoAPI.data
          console.log(this.dadosAnime)
          console.log(this.dadosAnime.title)
        })
          
        }
    
}


// https://api.jikan.moe/v4/anime/38000