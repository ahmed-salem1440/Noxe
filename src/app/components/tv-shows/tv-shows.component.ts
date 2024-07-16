import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit{
  trendingTV:any[]=[]
  searchTerm:string = ''
  isLoading:boolean = true
constructor(private _MoviesService:MoviesService){}
ngOnInit(): void {
    this._MoviesService.getTVShows().subscribe({
      next:(response)=>{
        this.trendingTV = response.results
        this.isLoading = false
      }
    })
}
}
