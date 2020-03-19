import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movies.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  movie: Movie;
  genre: string;
  years: string;
  selectedGenre: any = '';
  selectedYear: any = '';
  searchValue: string = '';
  sortedMovies: Movie[];
  m: Movie[];
  itemsPerPage: number = 5;

  constructor(private MovieService: MovieService) { }

  ngOnInit() {
    this.MovieService.getData().subscribe((data: Movie) => {
      this.movie = data["movies"];
      this.sortedMovies = data["movies"].slice();
      this.m = this.sortedMovies;
    });
    this.MovieService.getGenres().subscribe((data: string) => this.genre = data);
    this.MovieService.getYears().subscribe((data: string) => this.years = data);
  }
  getValue(event: any){
    this.itemsPerPage = event.target.value;
  }
  sortData(sort: Sort) {
    const data = this.m.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedMovies = data;
      return;
    }

    this.sortedMovies = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'season': return compare(a.season, b.season, isAsc);
        case 'network': return compare(a.network, b.network, isAsc);
        case 'premiere': return compare(a.premiere, b.premiere, isAsc);
        default: return 0;
      }
    });
  }

  setSelectedGenre() {
    this.selectedGenre = String(this.selectedGenre.genre);
  }
  setSelectedYear() {
    this.selectedYear = String(this.selectedYear.year);
    console.log(this.selectedYear);
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}