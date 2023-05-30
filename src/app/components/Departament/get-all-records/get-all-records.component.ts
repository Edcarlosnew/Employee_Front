import { Component, Input } from '@angular/core';
// importação/referencia do service para uso no componente
import { DepartamentAPIService } from 'src/app/serviceAPI/departament-api.service';

@Component({
  selector: 'app-get-all-records',
  templateUrl: './get-all-records.component.html',
  styleUrls: ['./get-all-records.component.css']
})
export class GetAllRecordsComponent {

  // Titulo do Componente
  titleComp: string = "Lista de Departamento"

  // 1ª parte: criar uma prop para ser a coleção iteravel de dados que será manipulado pelo componente
  departamentsList: any = []

  // 2ª parte: praticar a referencia de instancia do service para implementar a injeção de dependencia
  constructor(private depAPI: DepartamentAPIService){}

  @Input() dep:any;

  // 2ªb parte: "priorizar" o carregamento de algum conteudo - na view - que possa existir - 
  //com origem da API pelo método showRegisters()
  // fazer uso do hook ngOnInit()
  ngOnInit(): void{
    this.showRegisters()
  }

  // 3ª parte: criar um metodo/função para acessar o service que possui a tarefa assincrona que recupera
  // todos os registros da base.
  showRegisters(): any{
    // chamar a injeção de dependencia para acessar o service que chamará a API para trazer os dados da
    // base para o front
    this.depAPI.GetAllRecords().subscribe((dados:{}) =>{
      this.departamentsList = dados
    })
  }

  // 4ª parte: criar um método/função para acessar o service que possui a tarefa assincrona que exclui um dado - 
  // desde de que esteja devidamente identificado
  delDepartamentRegister(id: any){
     // verifica se o usuario, realmente, que excluir o registro
    if(confirm('Deseja, realmente, excluir este registro?')){
      // chamar a injeção de dependencia para acessar o service que usará a requisição de exclusão de registro da base
      this.depAPI.DeleteRegister(id).subscribe(() =>{
        this.showRegisters()
      })
    }
  }

}
