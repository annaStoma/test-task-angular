import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../movie';

@Pipe({
  name: 'networkFilter'
})
export class NetworkFilter implements PipeTransform {
  transform( movies: Movie[], searchValue: string): Movie[] {
    if (!movies || !searchValue) {
      return movies;
  }


  else{
    movies = movies.filter(movie =>
      movie.network.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
      console.log(movies);
  return movies;
}
  }
}