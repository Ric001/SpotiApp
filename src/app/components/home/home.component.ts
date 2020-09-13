import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newRealeses: Array<any> = [];
  loading = true;
  error: boolean;
  errorMessage: string;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getNewRealeses().subscribe(
      response => {
        this.newRealeses = response;
        this.loading = false;
      },
      failureDetails => {
        this.loading = false;
        this.error = true;
        this.errorMessage = failureDetails.error.error.message;
      }
    );
  }

}
