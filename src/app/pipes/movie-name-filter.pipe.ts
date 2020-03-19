import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../movie';

@Pipe({
  name: 'movieNameFilter'
})
export class MovieNameFilter implements PipeTransform {
  transform( movies: Movie[], searchValue: string): Movie[] {
    if (!movies || !searchValue) {
      return movies;
  }

  return movies.filter(movie =>
    movie.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
  }
}