import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CreateCarDTO } from 'src/app/services/domain/settings/car/car-settings';
import { CarService } from 'src/app/services/domain/settings/car/car.service';

@Component({
  selector: 'app-Car-create',
  templateUrl: './Car-create.component.html',
  styleUrls: ['./Car-create.component.css'],
})
export class CarCreateComponent implements OnInit {
  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private service: CarService
  ) {}

  CarFormGroup = new FormGroup({
    brand: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    distance: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  });
  Car: CreateCarDTO;
  ngOnInit(): void {}

  success = () => {
    this.snackBar.open('Sikeres létrehozás', 'Új termék', {
      duration: 1000,
    });
  };

  createCar = () => {
    this.Car = {
      brand: this.CarFormGroup.get('brand').value,
      type: this.CarFormGroup.get('type').value,
      distance: this.CarFormGroup.get('distance').value,
      price: this.CarFormGroup.get('price').value,
    };
    console.log(this.Car);

    this.service
      .createCar(
        this.Car.brand,
        this.Car.type,
        this.Car.distance,
        this.Car.price
      )
      .subscribe((variable) => {
        console.log(variable);

        if (variable != null) {
          this.success();
        }
      });
  };
}
