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

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getNewRealeses().subscribe(
      response => {
        this.newRealeses = response;
        this.loading = false;
      }
    );
  }

}
