import { Injectable } from '@angular/core';
//importar a dependencia HttpClient
import { HttpClient, HttpHeaders } from '@angular/common/http';
// importar o model
import { EmployeeInterface } from '../model/EmployeeInterface';
// importar a dependencia Observable
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeApiService {
  

  // é necessario estabelecer uma prop para estabelecer como valor o "endereço"
  // pelo qual os dados serão acessados
  apiUrlBack: string = 'http://localhost:5041/api/Employee';  
  

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

 GetAllRecordsEmployee(): Observable<EmployeeInterface[]>{
  // http://localhost:5041/api/Employee/All_Records
  return this.http.get<EmployeeInterface[]>(this.apiUrlBack+'/All_Records')
}


// 2ª metodo que acessa um dado devidamente identificado da base.

GetIdentifiedRecord(id: any): Observable<EmployeeInterface>{
  // http://localhost:5041/api/Employee/GetIdentifiedRecord
  return this.http.get<EmployeeInterface>(this.apiUrlBack+'/GetIdentifiedRecord/'+id)
}

 
// 3ª metodo que adiciona um registro na base.

AddRegister(recieveData: any): Observable<EmployeeInterface>{
  // http://localhost:5041/api/Employee/AddRegister
  return this.http.post<EmployeeInterface>(this.apiUrlBack+'/AddRegister', JSON.stringify
  (recieveData),this.crossAuth)
}


// 4ª metodo que atualiza/altera um registro na base.

ChangeUpdate(id: number, otherRegister:any): Observable<EmployeeInterface>{
  // http://localhost:5041/api/Employee/ChangeUpdate/:id
  return this.http.put<EmployeeInterface>(this.apiUrlBack+'/ChangeUpdate/'+id, JSON.stringify(otherRegister),
  this.crossAuth)  
}


// 5ª metodo que deleta um registro na base.

DeleteRegisterEmployee(id: any){
  // http://localhost:5041/api/Employee/DeleteRegister/:id
  return this.http.delete<EmployeeInterface>(this.apiUrlBack+'/DeleteRegister/'+id, this.crossAuth)
}


// 6º método que retorna um registro pelo CPF
GetRecordByCpf(cpf: string): Observable<EmployeeInterface>{
  // http://localhost:5041/api/Employee/GetRecordByCpf/:cpf
  return this.http.get<EmployeeInterface>(this.apiUrlBack+'/GetRecordByCpf/'+cpf);
}



}