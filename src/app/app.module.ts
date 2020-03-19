import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MovieService } from './movies.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieNameFilter } from './pipes/movie-name-filter.pipe';
import { NetworkFilter } from './pipes/network-filter.pipe';
import { GenreFilter } from './pipes/genre-filter.pipe';
import { PremiereFilter } from './pipes/premiere-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSortModule} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MovieNameFilter,
    NetworkFilter,
    GenreFilter,
    PremiereFilter,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSortModule,
    NgxPaginationModule,
    
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
