import { Component, Input } from '@angular/core';
// importação/referencia do service para uso no componente
import { EmployeeApiService } from 'src/app/serviceAPI/employee-api.service';

@Component({
  selector: 'app-all-register-employee',
  templateUrl: './all-register-employee.component.html',
  styleUrls: ['./all-register-employee.component.css'],
})
export class AllRegisterEmployeeComponent {
  // Titulo do Componente
  titleComp: string = 'Lista de Funcionários';

  // 1ª parte: criar uma prop para ser a coleção iteravel de dados que será manipulado pelo componente
  employeeList: any = []

  // 2ª parte: praticar a referencia de instancia do service para implementar a injeção de dependencia

  constructor(private empAPI: EmployeeApiService) {}

  @Input() emp: any;

  // 2ªb parte: "priorizar" o carregamento de algum conteudo - na view - que possa existir -
  //com origem da API pelo método showRegisters()
  // fazer uso do hook ngOnInit()
  ngOnInit(): void {
    this.showRegistersEmployee();
  }

  // 3ª parte: criar um metodo/função para acessar o service que possui a tarefa assincrona que recupera
  // todos os registros da base.
  showRegistersEmployee(): any {
    // chamar a injeção de dependencia para acessar o service que chamará a API para trazer os dados da
    // base para o front
    this.empAPI.GetAllRecordsEmployee().subscribe((Emp: {}) => {
      this.employeeList = Emp;
    });
  }

  // 4ª parte: criar um método/função para acessar o service que possui a tarefa assincrona que exclui um dado -
  // desde de que esteja devidamente identificado
  delEmployeeRegister(id: any) {
    // verifica se o usuario, realmente, que excluir o registro
    if (confirm('Deseja, realmente, excluir este registro?')) {
      // chamar a injeção de dependencia para acessar o service que usará a requisição de exclusão de registro da base
      this.empAPI.DeleteRegisterEmployee(id).subscribe(() => {
        this.showRegistersEmployee()
      })
    }
  }
}
