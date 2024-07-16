import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(term:any[],searchTerm:string):any[] {
    return term.filter((term)=> term.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
