import { Component, OnInit } from '@angular/core';

// importação/referencia do service
import { DepartamentAPIService } from 'src/app/serviceAPI/departament-api.service';

// importação/referencia das classes Router - para redirecionamento entre comps
// e ActivateRoute -para "copia" das rotas
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-put-change-update',
  templateUrl: './put-change-update.component.html',
  styleUrls: ['./put-change-update.component.css']
})
export class PutChangeUpdateComponent implements OnInit{
  

  // definir o titulo do comp
  titleComp: string = 'Atualizar/Alterar Dados'

  // 1ª passo: definir uma prop para receber dados
  departamentUpdateData: any = {
    nameDepartament: '',
    description:''
  }

  // 2ª passo: definir os objetos referenciais para DIs 
  constructor(
    private depAPI: DepartamentAPIService,
    private routing: Router,
    private copyRoute: ActivatedRoute
  ){}

  // 3ª passo: criar uma prop para atuar como a "copia" da rota usada pelo registro
  copyingRoute: any = this.copyRoute.snapshot.params['id']

  //fazer uso do Angular hook para "priorizar" o carregamento de algum conteudo no comp
  ngOnInit(): void{
     // aqui é necessario resgatar o registro identificado
    this.depAPI.GetIdentifiedRecord(this.copyingRoute).subscribe((departamentCurrentData:any) =>{
      this.departamentUpdateData = departamentCurrentData 
    })

  }

  // 5ª passo: criar o metodo/função que vai acessar o service que chama a API para atualizar/alterar os dados
  updateDepartamentRegister(){
    // chamar a DI para acessar o service
    this.depAPI.ChangeUpdate(this.departamentUpdateData.id, this.departamentUpdateData).subscribe(() =>{
      this.routing.navigate(['/showRegister'])
    })
  }
}
