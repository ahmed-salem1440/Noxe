import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  isLoading:boolean = true
  trendingPeople:any[] = [];
  searchTerm:string = ''

constructor(private _MoviesService:MoviesService){}
ngOnInit(): void {
    this._MoviesService.getPeople().subscribe({
      next:(response)=>{
        this.isLoading = false
        this.trendingPeople = response.results
      }
    })
}
}
