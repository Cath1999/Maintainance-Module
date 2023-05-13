import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PatientComponent } from './entities/patient/patient.component';
import { EmployeeComponent } from './entities/employee/employee.component';
import { CountryComponent } from './entities/country/country.component';
import { DepartmentComponent } from './entities/department/department.component';
import { AddPatientComponent } from './add/add-patient/add-patient.component';
import { AddEmployeeComponent } from './add/add-employee/add-employee.component';
import { AddCountryComponent } from './add/add-country/add-country.component';
import { AddDepartmentComponent } from './add/add-department/add-department.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    EmployeeComponent,
    CountryComponent,
    DepartmentComponent,
    AddPatientComponent,
    AddEmployeeComponent,
    AddCountryComponent,
    AddDepartmentComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
