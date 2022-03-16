import { CarDTO, CarResponseDTO } from './car-settings';

export interface Car {
  _id: string;
  brand: string;
  type: string;
  distance: number;
  price: number;
}

export interface CarResponse {
  _id: string;
}
export function toCars(CarResponse: CarDTO[]): Car[] {
  return CarResponse.map((dto) => toCar(dto));
}

export function toCar(CarDTO: CarDTO): Car {
  return {
    _id: CarDTO._id,
    brand: CarDTO.brand,
    type: CarDTO.type,
    distance: CarDTO.distance,
    price: CarDTO.price,
  };
}

export function toCreatedCar(CarDTO: CarResponseDTO): CarResponse {
  return {
    _id: CarDTO._id,
  };
}
