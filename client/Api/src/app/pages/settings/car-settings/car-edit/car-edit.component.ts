import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDTO } from 'src/app/services/domain/settings/car/car-settings';
import { CarService } from 'src/app/services/domain/settings/car/car.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css'],
})
export class CarEditComponent implements OnInit {
  car: CarDTO;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private service: CarService
  ) {}

  carFormGroup = new FormGroup({
    brand: new FormControl(localStorage.getItem('brand'), [
      Validators.required,
      Validators.maxLength(20),
    ]),
    type: new FormControl(localStorage.getItem('type'), [
      Validators.required,
      Validators.maxLength(20),
    ]),
    distance: new FormControl(Number(localStorage.getItem('distance')), [
      Validators.required,
      Validators.maxLength(20),
    ]),
    price: new FormControl(Number(localStorage.getItem('price')), [
      Validators.required,
      Validators.maxLength(20),
    ]),
  });
  carDTO: CarDTO;

  carId = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {}

  success() {
    this.snackBar.open('Sikeres módosítás', 'Autó', {
      duration: 1000,
    });
  }

  editCar() {
    this.car = {
      _id: this.carId,
      brand: this.carFormGroup.get('brand').value,
      type: this.carFormGroup.get('type').value,
      distance: this.carFormGroup.get('distance').value,
      price: this.carFormGroup.get('price').value,
    };
    this.service
      .editCar(
        this.car._id,
        this.car.brand,
        this.car.type,
        this.car.distance,
        this.car.price
      )
      .subscribe((variable) => {
        if (variable != null) {
          this.success();
          this.router.navigate(['settings/car']);
        }
      });
  }
  s;
}
