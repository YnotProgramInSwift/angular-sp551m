import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Movie } from './Movie';
import { MovieService } from './movie.service';
import { RentalListService } from './rental-list.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  flops$;
  rentalList$;

  constructor(
    private movieService: MovieService,
    private rentalListService: RentalListService
  ) {}

  ngOnInit() {
    this.flops$ = this.movieService.getMovies();
    this.getRentalList();
  }

  getRentalList() {
    this.rentalList$ = this.rentalListService.getRentals();
  }

  addToRentalList(flop) {
    this.rentalListService.addRental(flop).subscribe(() => {
      this.getRentalList();
    });
  }

  deleteItem(id: number) {
    this.rentalListService.removeRental(id).subscribe(() => {
      this.getRentalList();
    });
  }
}
