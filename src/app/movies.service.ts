import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }
  getTrending(mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=1b0436b8e1d99e9464ac046e9ed9853c`)
  } 
  getDetails(mediaType:string,id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=1b0436b8e1d99e9464ac046e9ed9853c&language=en-US`)
  } 
  getSimilar(mediaType:string,id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=1b0436b8e1d99e9464ac046e9ed9853c&language=en-US`)
  } 
  getMovies():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=1b0436b8e1d99e9464ac046e9ed9853c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`)
  }
  getTVShows():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/tv?api_key=1b0436b8e1d99e9464ac046e9ed9853c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`)
  }
  getPeople():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=1b0436b8e1d99e9464ac046e9ed9853c&language=en-US&page=1`)
  }
}
