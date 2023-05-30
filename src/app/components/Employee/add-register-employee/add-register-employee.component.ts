import { Component, Input, OnInit } from '@angular/core';
import { EmployeeApiService } from 'src/app/serviceAPI/employee-api.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DepartamentAPIService } from 'src/app/serviceAPI/departament-api.service';
import { DepartamentInterface } from 'src/app/model/DepartamentInterface';


@Component({
  selector: 'app-add-register-employee',
  templateUrl: './add-register-employee.component.html',
  styleUrls: ['./add-register-employee.component.css']
})
export class AddRegisterEmployeeComponent implements OnInit {
  
  titleComp: string = 'Adicionar um Funcionário';

  departamentList: DepartamentInterface[] = [];
  
  maxDate: string = '';

  @Input() insertRegisterEmployee = {
    nameEmployee: '',
    cpf: '',
    rg: '',
    expeditionAgency: '',
    hiringDate: '',
    departamentId: '',
    mobilePhone: '',
    address: '',
    complement: '',
    neighborhood: '',
    state: '',
    city: '',
    zipCode: '',
    salary: ''
  };

  constructor(
    private empAPI: EmployeeApiService,
    private routing: Router,
    private depAPI: DepartamentAPIService,
  ) { } 
    

  ngOnInit(): void {
    this.maxDate = moment().format('YYYY-MM-DDTHH:mm:ss');

    this.depAPI.GetAllRecords().subscribe((departamentList: DepartamentInterface[]) => {
      this.departamentList = departamentList;
    });
  }
 
  
   insertOneRegisterEmployee(): void {
    if (!this.insertRegisterEmployee.nameEmployee) {
      return;
    } 
   
      
    const newRegisterEmployee = {
      nameEmployee: this.insertRegisterEmployee.nameEmployee,
      cpf: this.insertRegisterEmployee.cpf,
      rg: this.insertRegisterEmployee.rg,
      expeditionAgency: this.insertRegisterEmployee.expeditionAgency,
      hiringDate: this.insertRegisterEmployee.hiringDate,
      departamentId: this.insertRegisterEmployee.departamentId,
      mobilePhone: this.insertRegisterEmployee.mobilePhone,
      address: this.insertRegisterEmployee.address,
      complement: this.insertRegisterEmployee.complement,
      neighborhood: this.insertRegisterEmployee.neighborhood,
      state: this.insertRegisterEmployee.state,
      city: this.insertRegisterEmployee.city,
      zipCode: this.insertRegisterEmployee.zipCode,
      salary: this.insertRegisterEmployee.salary
    };
  
    this.empAPI.AddRegister(newRegisterEmployee).subscribe(() => {
      this.routing.navigate(['/showEmployee']);
    });
  }
}
