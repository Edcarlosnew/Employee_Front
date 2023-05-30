import { Component, OnInit } from '@angular/core';

// importar/referencia do service no componente
import { EmployeeApiService } from 'src/app/serviceAPI/employee-api.service';

// importar a classe ActivateRoute
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-register-employee',
  templateUrl: './one-register-employee.component.html',
  styleUrls: ['./one-register-employee.component.css']
})
export class OneRegisterEmployeeComponent implements OnInit {

  // definir um titulo para um componente
  titleComp: string = 'Atualização/Alteração'

  // 1ª passo: criar uma prop para ser o elemento iteravel de dados com o qual o componente lidará
  employeeOneRegister: any = {}

  // 2ª passo: praticar a referencia de instancia para gerar as DIs do service e da classe ActivateRoute
  constructor(private empAPI: EmployeeApiService, private copyRoute: ActivatedRoute) {}

  // 3ª passo: criar uma nova prop para ser uma "cópia" da rota pela qual os dados do registro irão circular
  copyingRoute: any = this.copyRoute.snapshot.params['id']

  // 4ª passo: definir o hook ngOnInit para "priorizar" o carregamento de um determinado conteudo
  ngOnInit(): void {
      this.OneRegisterEmployee()
  }

  // 5ª passo: criar um metodo/função para acessar o service que possui a tarefa assincrona
  // que recupera um unico registro devidamente identificado
  OneRegisterEmployee(){
    this.empAPI.GetIdentifiedRecord(this.copyingRoute).subscribe((dados:{}) =>{
      this.employeeOneRegister = dados
    })
  }

}
