import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _MoviesService:MoviesService){}
  isLoading:boolean = true
  trendingMovies:any[] = []
  trendingTV:any[] = []
  trendingPeople:any[] = []
ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe({
      next:(response)=>{
        this.isLoading = false
        console.log(response);
        
        this.trendingMovies = response.results.slice(0,10)

      }
    })
    this._MoviesService.getTrending('tv').subscribe({
      next:(response)=>{
        this.trendingTV = response.results.slice(0,10)

      }
    })
    this._MoviesService.getTrending('person').subscribe({
      next:(response)=>{
        this.trendingPeople = response.results.slice(0,10)

      }
    })
}
}
