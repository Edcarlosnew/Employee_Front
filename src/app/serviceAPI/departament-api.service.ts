import { Injectable } from '@angular/core';

// importar a dependencia HttpClient que auxiliara na estrutura de requisições http
import { HttpClient, HttpHeaders } from '@angular/common/http';

// importar o model para a operação com os dados
import { DepartamentInterface } from '../model/DepartamentInterface';

// importar a dependencia Observable
import { Observable } from 'rxjs';

@Injectable()
export class DepartamentAPIService {

  // é necessario estabelecer uma prop para estabelecer como valor o "endereço"
  // pelo qual os dados serão acessados
  apiUrlBack: string = 'http://localhost:5041/api/Departament';  


  // estabelecer  no construtor a injeção de dependencia para gerar o objeto referencial 
  // http - que lida com as requisições à API
  constructor(private http: HttpClient) { }

   // estabelecer as credenciais de acesso para o cross-domain entre as aplicações
   crossAuth = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }


   /*
  ============================================================================================================
    ESTABELECER O FLUXO DE DADOS A PARTIR DA CHAMADA DA API NO BACKEND
  ============================================================================================================
  */

  /*
  ============================================================================================================
    DEFINIR OS METODOS GET(), POST(), PUT() E DELETE()
  ============================================================================================================
  */

  // 1ª metodo que acessa todos os dados da base.

  GetAllRecords(): Observable<DepartamentInterface[]> {
    // http://localhost:5041/api/Departament/All_Records
    return this.http.get<DepartamentInterface[]>(this.apiUrlBack+'/All_Records')
}


  // 2ª metodo que acessa um dado devidamente identificado da base.
  GetIdentifiedRecord(id: any): Observable<DepartamentInterface>{
    // http://localhost:5041/api/Departament/GetIdentifiedRecord
    return this.http.get<DepartamentInterface>(this.apiUrlBack+'/GetIdentifiedRecord/'+id)
  }


  // 3ª metodo que adiciona um registro na base.
  AddRegister(recieveData: any): Observable<DepartamentInterface>{
    // http://localhost:5041/api/Departament/AddRegister
    return this.http.post<DepartamentInterface>(this.apiUrlBack+'/AddRegister', JSON.stringify
    (recieveData),this.crossAuth)
  }


  // 4ª metodo que atualiza/altera um registro na base.
  ChangeUpdate(id: number, otherRegister:any): Observable<DepartamentInterface>{
    // http://localhost:5041/api/Departament/ChangeUpdate/:id
    return this.http.put<DepartamentInterface>(this.apiUrlBack+'/ChangeUpdate/'+id, JSON.stringify(otherRegister),
    this.crossAuth)  
  }


  // 5ª metodo que deleta um registro na base.
  DeleteRegister(id: any){
    // http://localhost:5041/api/Departament/DeleteRegister/:id
    return this.http.delete<DepartamentInterface>(this.apiUrlBack+'/DeleteRegister/'+id, this.crossAuth)
  }

}



