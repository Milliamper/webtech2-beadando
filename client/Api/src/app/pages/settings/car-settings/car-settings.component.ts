import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Car } from 'src/app/services/domain/settings/car/car-setting.model';
import { CarService } from 'src/app/services/domain/settings/car/car.service';
import { CarCreateComponent } from './car-create/car-create.component';
import { CarEditComponent } from './car-edit/car-edit.component';

@Component({
  selector: 'app-Car-settings',
  templateUrl: './Car-settings.component.html',
  styleUrls: ['./Car-settings.component.css'],
})
export class CarSettingsComponent implements OnInit {
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private service: CarService
  ) {}

  user: string;
  ELEMENT_DATA: Car[];
  displayedColumns: string[];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.user = sessionStorage.getItem('currentUser');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.getAllCars();
  }

  deleteCar(Car: Car): void {
    this.service.deleteCar(Car._id).subscribe((val) => {
      console.log(val);
      alert('Sikeresen törölve!');
      this.getAllCars();
    });
  }

  editCar(car: Car): void {
    localStorage.setItem('brand', car.brand);
    localStorage.setItem('type', car.type);
    localStorage.setItem('distance', car.distance.toString());
    localStorage.setItem('price', car.price.toString());
    this.router.navigate(['settings/car', 'edit', car._id]);
  }

  getAllCars(): void {
    this.service.getCars().subscribe((val) => {
      this.ELEMENT_DATA = val;
      console.log(this.ELEMENT_DATA);
      this.displayedColumns = [
        'brand',
        'type',
        'distance',
        'price',
        'edit',
        'delete',
      ];
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  createCar(): void {
    const dialogRef = this.dialog.open(CarCreateComponent, {
      width: '1000px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.getAllCars();
    });
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['home', '']);
  }
}
