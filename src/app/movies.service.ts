import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class MovieService{
  
    constructor(private http: HttpClient){ }
      
    getData(){
        return this.http.get('assets/movies.json');
    }

    getGenres(){
        return this.http.get('assets/genres.json');
    }

    getYears(){
        return this.http.get('assets/years.json');
    }
}