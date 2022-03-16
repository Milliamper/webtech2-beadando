import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarEditComponent } from './car-settings/car-edit/car-edit.component';
import { CarSettingsComponent } from './car-settings/car-settings.component';

const routes: Routes = [
  { path: 'car', component: CarSettingsComponent },
  { path: 'car/edit/:id', component: CarEditComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
