import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any = {};
  loading: boolean;

  constructor(private activatedRouter: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;

    this.activatedRouter.params.subscribe( params =>{
       this.getArtista( params['id'] );
       this.getTopTracks( params['id'] );
    });

   }

  ngOnInit() {
  }

  getArtista(id: string){
    this.loading = true;
      // tslint:disable-next-line: align
      this.spotify.getArtista(id)
      .subscribe( artista => {
        console.log(artista);
        this.artista  = artista;
        this.loading = false;
      });
  }

  getTopTracks(id: string){
    this.loading = true; 
    this.spotify.getTopTracks(id)
    .subscribe( topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }



}
