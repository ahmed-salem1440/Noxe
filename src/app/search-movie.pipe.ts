import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchMovie'
})
export class SearchMoviePipe implements PipeTransform {


  transform(movies:any[],searchTerm:string):any[] {
    return movies.filter((movie)=> movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
