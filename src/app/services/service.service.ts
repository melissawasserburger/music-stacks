import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../models/profile';
import { Observable } from 'rxjs';

//The base URI for all Web API requests is https://api.spotify.com/v1
const SPOTIFY_API = "https://api.spotify.com/v1"

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

constructor(private http: HttpClient) { }

getProfile() : Observable<Profile> {
  return this.http.get<Profile>(`${SPOTIFY_API}/me`)
}

}
