import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RentalListService {
  constructor(private http: HttpClient) {}

  getRentals() {
    return this.http.get('http://localhost:3000/rentalList');
  }

  addRental(flop: Object) {
    let newRentalObject = flop;
    newRentalObject.id = undefined;
    return this.http.post('http://localhost:3000/rentalList', newRentalObject);
  }

  removeRental(id: number) {
    return this.http.delete('http://localhost:3000/rentalList/' + id);
  }
}
