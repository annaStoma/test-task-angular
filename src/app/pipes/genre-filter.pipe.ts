import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../movie';

@Pipe({
  name: 'genreFilter'
})
export class GenreFilter implements PipeTransform {
  transform(movies: Movie[], selectedGenre: any): Movie[] {
    if (!movies || !selectedGenre) {
      return movies;
    }
    else {
      movies = movies.filter(movie =>
        String(movie.genre).toLowerCase().indexOf(selectedGenre.toLowerCase()) !== -1);
      return movies;
    }

  }

}