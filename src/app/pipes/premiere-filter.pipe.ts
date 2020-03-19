import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../movie';

@Pipe({
  name: 'premiereFilter'
})
export class PremiereFilter implements PipeTransform {
  transform(movies: Movie[], selectedYear: any): Movie[] {
    if (!movies || !selectedYear) {
      return movies;
    }
    else {
      movies = movies.filter(movie =>
        String(movie.premiere).toLowerCase().indexOf(selectedYear.toLowerCase()) !== -1);
      return movies;
    }

  }

}