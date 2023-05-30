import { Component, OnInit } from '@angular/core';

// importar/referencia do service no componente
import { DepartamentAPIService } from 'src/app/serviceAPI/departament-api.service';

// importar a classe ActivateRoute
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-get-identified-record',
  templateUrl: './get-get-identified-record.component.html',
  styleUrls: ['./get-get-identified-record.component.css']
})
export class GetGetIdentifiedRecordComponent implements OnInit {

    // definir um titulo para um componente
  titleComp: string = 'Detalhe do Perfil'

  // 1ª passo: criar uma prop para ser o elemento iteravel de dados com o qual o componente lidará
  departamentOneRegister: any = {}

  // 2ª passo: praticar a referencia de instancia para gerar as DIs do service e da classe ActivateRoute
  constructor(
    private depApi: DepartamentAPIService,
    private copyRoute: ActivatedRoute
    ){}

    // 3ª passo: criar uma nova prop para ser uma "cópia" da rota pela qual os dados do registro irão circular
  copyingRoute: any = this.copyRoute.snapshot.params['id']  

  // 4ª passo: definir o hook ngOnInit para "priorizar" o carregamento de um determinado conteudo
  ngOnInit(): void{
    this.OneRegister()
  }

  // 5ª passo: criar um metodo/função para acessar o service que possui a tarefa assincrona
  // que recupera um unico registro devidamente identificado
  OneRegister(){
     // chamar a DI (Depandencia Injection) para trazer o registro que foi selecionado na view studentList
    this.depApi.GetIdentifiedRecord(this.copyingRoute).subscribe((dados:{}) =>{
      this.departamentOneRegister = dados
    })  
  }

}
