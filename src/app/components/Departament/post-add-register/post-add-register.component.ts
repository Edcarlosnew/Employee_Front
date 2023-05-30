import { Component, Input, OnInit } from '@angular/core';
// importação/referencia do service no componente
import { DepartamentAPIService } from 'src/app/serviceAPI/departament-api.service';

// importação da classe Router para redirecionamento entre componentes
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-add-register',
  templateUrl: './post-add-register.component.html',
  styleUrls: ['./post-add-register.component.css']
})
export class PostAddRegisterComponent implements OnInit{


   // definir um titulo para o componente
  titleComp: string = 'Adicionar um Departamento'

  // 1ª passo: criar uma prop - objeto literal - para receber os valores que virão da view
  @Input() insertRegister = {

    nameDepartament: '',
    description: ''

  }

  // 2ª passo: definir a DI com os objetos referencias no construtor
  constructor(
    private depAPI: DepartamentAPIService,
    private routing: Router,

  ){}

  ngOnInit(): void {
      
  }

  // 3ª passo: criar um método/função para acessar o service e enviar os dados para tarefa assincrona de inserção
  insertOneRegister(){
    if (!this.insertRegister.nameDepartament && !this.insertRegister.description) {
      return;
    }
    this.depAPI.AddRegister(this.insertRegister).subscribe(() =>
    {
      this.routing.navigate(['/showRegister'])
    })  
  }
  
}
