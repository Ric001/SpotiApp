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
      Authorization: 'Bearer BQC74mEjiacQMfyywUjZim_KOqfwWNyKY4l6ZMoXF-aCLC-Oqzu_2S3dQBiKZENCpeLwArN_Tl6ZKouLkXg'
    });
    const url = `https://api.spotify.com/v1/${ query }`;
    return this.http.get<any>(url, { headers });
  }

  getNewRealeses(): Observable<any> {
    return this.getResponseByQuery('browse/new-releases?limit=20').pipe( map( (data: any ) => data.albums.items ));
  }

  getArtists(keyword: string): Observable<any> {
    return this.getResponseByQuery(`search?q=${ keyword }&type=artist&limit=20`).pipe( map( (data: any) => data.artists.items ));
  }
}
