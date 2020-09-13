import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: any;
  topTracks: any;
  loading: boolean;
  failureDetails: any = {};

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe((params: Params) => this.getArtist(params?.id));
  }

  getArtist(id: string): void {
    this.spotifyService.getArtist(id).subscribe(
      response => {
        this.loading = false;
        this.artist = response;
        this.getTopTracks(id);
      },
      failureDetails => {
        this.loading = false;
        this.failureDetails.error = true;
        this.failureDetails.errorMessage = failureDetails.error.error.message;
      }
    );
  }

  getTopTracks(id: string): void {
    this.spotifyService.getTopTracks(id).subscribe(response => {
      this.topTracks = response;
    });
  }

}
