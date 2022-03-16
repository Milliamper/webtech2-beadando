import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { CarCreateComponent } from './car-settings/car-create/car-create.component';
import { CarEditComponent } from './car-settings/car-edit/car-edit.component';
import { CarSettingsComponent } from './car-settings/car-settings.component';

@NgModule({
  declarations: [CarSettingsComponent, CarCreateComponent, CarEditComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SettingsModule {}
