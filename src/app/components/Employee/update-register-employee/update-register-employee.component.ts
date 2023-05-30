import { Component, Input, OnInit } from '@angular/core';

// importação/referencia do service
import { EmployeeApiService } from 'src/app/serviceAPI/employee-api.service';

// importação/referencia das classes Router - para redirecionamento entre comps
// e ActivateRoute -para "copia" das rotas
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { DepartamentAPIService } from 'src/app/serviceAPI/departament-api.service';
import { DepartamentInterface } from 'src/app/model/DepartamentInterface';

@Component({
  selector: 'app-update-register-employee',
  templateUrl: './update-register-employee.component.html',
  styleUrls: ['./update-register-employee.component.css']
})
export class UpdateRegisterEmployeeComponent implements OnInit {

  currentDate: string = new Date().toISOString().substring(0, 16);

  //fazer uso do Angular hook para "priorizar" o carregamento de algum conteudo no comp

  departamentList: DepartamentInterface[] = [];

  maxDate: string = '';

   // definir o titulo do comp
   titleComp: string = 'Atualizar/Alterar Dados'

   // 1ª passo: definir uma prop para receber dados
   @Input() employeeUpdate: any = {
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
   salary: '',
   };

   // 2ª passo: definir os objetos referenciais para DIs 

   constructor(
    private empAPI: EmployeeApiService,
    private routing: Router,
    private copyRoute: ActivatedRoute,
    private depAPI: DepartamentAPIService,
   ){}

   // 3ª passo: criar uma prop para atuar como a "copia" da rota usada pelo registro
   copyingRoute: any = this.copyRoute.snapshot.params['id']

   // 4ª passo: fazer uso do Angular hook para "priorizar" o carregamento de algum conteudo no comp
   ngOnInit(): void {
      this.maxDate = moment().format('YYYY-MM-DDTHH:mm:ss');
      // aqui é necessario resgatar o registro identificado
      this.empAPI.GetIdentifiedRecord(this.copyingRoute).subscribe((employeeCurrentData: any) =>{
        this.employeeUpdate = employeeCurrentData

        this.depAPI.GetAllRecords().subscribe((departamentList: DepartamentInterface[]) => {
          this.departamentList = departamentList;
        });
      })
   } 
    
   // 5ª passo: criar o metodo/função que vai acessar o service que chama a API para atualizar/alterar os dados

   updateEmployeeRegister(){
    // chamar a DI para acessar o service
    this.empAPI.ChangeUpdate(this.employeeUpdate.id, this.employeeUpdate).subscribe(() =>{
      this.routing.navigate(['/showEmployee'])
    })
   }

}
