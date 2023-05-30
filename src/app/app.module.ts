import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// foram importados para uso no projeto
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// importação/referencia do service no "centralizador" de recursos
import { DepartamentAPIService } from './serviceAPI/departament-api.service';
import { EmployeeApiService } from './serviceAPI/employee-api.service';
import { PhotoApiService } from './serviceAPI/photo-api.service';
import { ViaCepAddressApiService } from './serviceAPI/via-cep-address-api.service';
import { ModalModule } from 'ngx-bootstrap/modal';

// imports Departament
import { GetAllRecordsComponent } from './components/Departament/get-all-records/get-all-records.component';
import { DelDeleteRegisterComponent } from './components/Departament/del-delete-register/del-delete-register.component';
import { GetGetIdentifiedRecordComponent } from './components/Departament/get-get-identified-record/get-get-identified-record.component';
import { PostAddRegisterComponent } from './components/Departament/post-add-register/post-add-register.component';
import { PutChangeUpdateComponent } from './components/Departament/put-chage-update/put-change-update.component';

import { ShowDepartComponent } from './components/Departament/show-depart/show-depart/show-depart.component';



import { ShowEmployeeComponent } from './components/Employee/show-employee/show-employee.component';

import { AddRegisterEmployeeComponent } from './components/Employee/add-register-employee/add-register-employee.component';
import { AllRegisterEmployeeComponent } from './components/Employee/all-register-employee/all-register-employee.component';
import { DeleteRegisterEmployeeComponent } from './components/Employee/delete-register-employee/delete-register-employee.component';
import { OneRegisterEmployeeComponent } from './components/Employee/one-register-employee/one-register-employee.component';
import { UpdateRegisterEmployeeComponent } from './components/Employee/update-register-employee/update-register-employee.component';
import { EmployeeComponent } from './components/Employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgxCpfCnpjModule } from 'ngx-cpf-cnpj';
import { FileUploadModule } from 'ng2-file-upload';
import { CurrencyPipe } from '@angular/common';
import { PrintOptionsComponent } from './print-options/print-options.component';





@NgModule({
  declarations: [
    // Componentes de Departament
    AppComponent,
    GetAllRecordsComponent,
    DelDeleteRegisterComponent,
    GetGetIdentifiedRecordComponent,
    PostAddRegisterComponent,
    PutChangeUpdateComponent,

     // Lista Geral de Departaments e Employees
    ShowDepartComponent,
    ShowEmployeeComponent,

    // Componentes de Employee
    AddRegisterEmployeeComponent,
    AllRegisterEmployeeComponent,
    DeleteRegisterEmployeeComponent,
    OneRegisterEmployeeComponent,
    UpdateRegisterEmployeeComponent,
    EmployeeComponent,
    PrintOptionsComponent,
     
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    NgxCpfCnpjModule,
    FileUploadModule

  ],
  // aqui, o service está referenciado e inicializado como um "provedor de
  // conteudo/funcionalidade" para todos os componentes do projeto
  providers: [DepartamentAPIService, EmployeeApiService,PhotoApiService,ViaCepAddressApiService, CurrencyPipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
