import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  isLoading:boolean = true
  searchTerm:string = ''
  trendingMovies:any[]=[];
constructor(private _MoviesService:MoviesService){}
ngOnInit(): void {
    this._MoviesService.getMovies().subscribe({
      next:(response)=>{
        this.isLoading = false
        this.trendingMovies = response.results
        console.log(response);
        
      }
    })
}
}
