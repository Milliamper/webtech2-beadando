import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CarController } from './car.controller.service';
import { toCreatedCar, toCars } from './car-setting.model';
import { CarDTO, CarResponseDTO } from './car-settings';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private controller: CarController) {}

  getCars(): Observable<CarDTO[]> {
    return this.controller.getCars().pipe(
      map((response: CarDTO[]) => {
        return response ? toCars(response) : null;
      })
    );
  }

  createCar(brand: string, type: string, distance: number, price: number) {
    return this.controller.createCar({ brand, type, distance, price }).pipe(
      map((response: CarResponseDTO) => {
        return response ? toCreatedCar(response) : null;
      })
    );
  }

  editCar(
    _id: string,
    brand: string,
    type: string,
    distance: number,
    price: number
  ) {
    return this.controller
      .editCar({ _id, brand, type, distance, price })
      .pipe();
  }

  deleteCar(_id: string) {
    return this.controller.deleteCar(_id).pipe();
  }
}
