export interface CarDTO {
  _id: string;
  brand: string;
  type: string;
  distance: number;
  price: number;
}

export interface CreateCarDTO {
  brand: string;
  type: string;
  distance: number;
  price: number;
}

export interface CarResponseDTO {
  _id: string;
}
