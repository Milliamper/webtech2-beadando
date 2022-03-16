import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponse } from './car-setting.model';
import { CreateCarDTO, CarDTO } from './car-settings';

@Injectable()
export abstract class CarController {
  public abstract getCars(): Observable<CarDTO[]>;
  public abstract createCar(request: CreateCarDTO): Observable<CarResponse>;
  public abstract editCar(request: CarDTO): Observable<CarDTO>;
  public abstract deleteCar(_id: string);
}
