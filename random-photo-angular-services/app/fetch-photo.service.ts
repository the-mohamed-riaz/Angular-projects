import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface unsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class FetchPhotoService {

  constructor(private http: HttpClient) { }

  fetchPhoto(){
    return this.http.get<unsplashResponse>("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization: 'Client-ID GIAKi0fwOSi9ikQ_0fGSCOpBQrqNeld3xVDyLvrfgu8' 
      }
    })
  }
}
