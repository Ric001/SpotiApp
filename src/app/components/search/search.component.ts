import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artists: Array<any> = [];
  loading: boolean;
  failureDetails: any = {};
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void { }

  search(keyword: string): void {
    this.loading = keyword ? true : false;
    this.spotifyService.getArtists(keyword).subscribe(
      response => {
        this.artists = response;
        this.loading = false;
      },
      failureDetails => {
        this.loading = false;
        this.failureDetails.errorMessage = failureDetails.error.error.message;
        this.failureDetails.error = true;
      }
    );
  }

}
