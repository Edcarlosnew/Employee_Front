import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// para criar as rotas, é necessario referenciar, aqui os componenets
import { GetAllRecordsComponent } from './components/Departament/get-all-records/get-all-records.component';
import { GetGetIdentifiedRecordComponent } from './components/Departament/get-get-identified-record/get-get-identified-record.component';
import { PostAddRegisterComponent } from './components/Departament/post-add-register/post-add-register.component';
import { PutChangeUpdateComponent } from './components/Departament/put-chage-update/put-change-update.component';
import { ShowDepartComponent } from './components/Departament/show-depart/show-depart/show-depart.component';


import { ShowEmployeeComponent } from './components/Employee/show-employee/show-employee.component';
import { AddRegisterEmployeeComponent } from './components/Employee/add-register-employee/add-register-employee.component';
import { OneRegisterEmployeeComponent } from './components/Employee/one-register-employee/one-register-employee.component';
import { AllRegisterEmployeeComponent } from './components/Employee/all-register-employee/all-register-employee.component';
import { UpdateRegisterEmployeeComponent } from './components/Employee/update-register-employee/update-register-employee.component';
import { PrintOptionsComponent } from './print-options/print-options.component';


// para compor as rotas, basta defini-las dentro do array routes
const routes: Routes = [
  {path:'getAll', component: GetAllRecordsComponent},
  {path:'getOne/:id', component: GetGetIdentifiedRecordComponent},
  {path:'addRegister', component: PostAddRegisterComponent},
  {path:'updateRegister/:id', component: PutChangeUpdateComponent},

  // Rota para mostrar todos os Registros de Departament
  {path:'showRegister', component: ShowDepartComponent},
  // Rota para mostrar todos os Registros de Employee
  {path:'showEmployee', component: ShowEmployeeComponent},

  // Rota para tela de Login
  

  // Rotas de Employee
  {path:'getAllEmployee', component: AllRegisterEmployeeComponent},
  {path:'addRegisterEmployee', component: AddRegisterEmployeeComponent},
  {path:'getOneEmployee/:id', component: OneRegisterEmployeeComponent},
  {path:'updateEmployee/:id', component: UpdateRegisterEmployeeComponent},
  {path:'print', component: PrintOptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
