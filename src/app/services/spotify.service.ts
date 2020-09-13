import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getResponseByQuery( query: string ): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Bearer BQDVpQtH-fCsNzgWP7xMLZJgddXm17LfgI27biU60NP38gZL1jS4UU9v1XB1KFMW02sq7wbobz5p471rjuo'
    });
    const url = `https://api.spotify.com/v1/${ query }`;
    return this.http.get<any>(url, { headers });
  }

  getNewRealeses(): Observable<any> {
    return this.getResponseByQuery('browse/new-releases?limit=20')
    .pipe( map( (data: any ) => data.albums.items ));
  }

  getArtists(keyword: string): Observable<any> {
    return this.getResponseByQuery(`search?q=${ keyword }&type=artist&limit=20`)
    .pipe( map( (data: any) => data.artists.items ));
  }

  getArtist(id: string): Observable<any> {
    return this.getResponseByQuery(`artists/${id}`);
  }

  getTopTracks(id: string): Observable<any> {
    return this.getResponseByQuery(`artists/${id}/top-tracks?country=us`)
      .pipe( map((data: any) => data.tracks ));
  }
}
