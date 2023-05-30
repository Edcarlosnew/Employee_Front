

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class PhotoApiService {

  readonly apiUrlBack: string = 'http://localhost:5041/api/Photo';

  constructor(private http: HttpClient) { }
  crossAuth = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  // 1ª metodo que acessa todas as fotos da base.
  AllPhotos():Observable<any>{
    // http://localhost:5041/api/Photo/All_Records
    return this.http.get<any>(this.apiUrlBack+'/All_Photos');
  }

  // 2ª metodo que acessa uma foto pelo seu id na base.
  GetOne(id: any):Observable<any>{
    // http://localhost:5041/api/Photo/GetOne
    return this.http.get<any>(this.apiUrlBack+'/GetOne/'+id);
  }
  
  // 3ª metodo que adiciona uma foto na base.
  AddPhoto(recieveData: any): Observable<any>{
    // http://localhost:5041/api/Photo/AddPhoto
    return this.http.post<any>(this.apiUrlBack+'/AddPhoto',(recieveData),this.crossAuth)
  }
 
  // 4ª metodo que atualiza/altera uma foto na base.
  UpdatePhoto(id: any, otherPhoto:any): Observable<any>{
    // http://localhost:5041/api/Photo/UpdatePhoto
    return this.http.put<any>(this.apiUrlBack+'/UpdatePhoto/'+id,(otherPhoto),this.crossAuth)  
  }

  // 5ª metodo que deleta uma foto na base.
  DeletePhoto(id: any){
    // http://localhost:5041/api/Photo/DeletePhoto
    return this.http.delete<any>(this.apiUrlBack+'/DeletePhoto/'+id, this.crossAuth)
  }
}
