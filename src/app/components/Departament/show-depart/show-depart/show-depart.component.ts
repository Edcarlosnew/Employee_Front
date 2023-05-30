import { Component } from '@angular/core';
import { DepartamentAPIService } from 'src/app/serviceAPI/departament-api.service';
import { DepartamentInterface } from 'src/app/model/DepartamentInterface';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-show-depart',
  templateUrl: './show-depart.component.html',
  styleUrls: ['./show-depart.component.css']
})
export class ShowDepartComponent {

  departamentList: DepartamentInterface[] = [];
  filteredDepartments: DepartamentInterface[] = [];
  nameFilter: string = '';
  idFilter: number | undefined;
  tituloComp: string = 'Lista de Departamentos'
  hasResults: boolean = true;

  constructor(private departAPI: DepartamentAPIService, private router: Router, modalService: NgbModal) { }

  ngOnInit() {
    // Carrega todos os departamentos
    this.loadDepartamentList();
  }

  // Carrega todos os departamentos
  loadDepartamentList(): any {
    this.departAPI.GetAllRecords().subscribe(
      (data) => {
        this.departamentList = data;
        this.clearFilters();
      },
      (error) => console.log(error)
    );
  }
 
  // Filtra os departamentos
  filterDepartments() {
    this.filteredDepartments = this.departamentList.filter((department) => {
      if (this.idFilter !== undefined && department.id === this.idFilter) {
        return true;
      }
      if (
        this.nameFilter !== '' &&
        department.nameDepartament.toLowerCase().includes(this.nameFilter.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    this.hasResults = this.filteredDepartments.length > 0;
  }
  
  

  // Limpa os filtros
  clearFilters(): void {
    this.filteredDepartments = this.departamentList;
    this.nameFilter = '';
    this.idFilter = undefined;
    this.hasResults = true;
  }  
    
  printTable(): void {
    // Selecionar campos a serem impressos
    let selectedFields: string[] = ['id', 'nameDepartament', 'description',];
    // Filtrar a tabela com base nos campos selecionados
    let filteredTable = this.filteredDepartments.map(function(departament) {
      return {
        id: departament.id,
        nameDepartament: departament.nameDepartament,
        description: departament.description
      };
    });
    // Gerar visualização da tabela filtrada com os campos selecionados
    let printContents = '<table style="width: 100%; border-collapse: collapse border 1px black">'; // define a largura da tabela como 100% e remove a separação entre as células
    // Adicionar cabeçalho da tabela
    printContents += '<thead style="background-color: #ddd;">'; // adiciona um fundo cinza claro para o cabeçalho da tabela
    printContents += '<tr>';
    if (selectedFields.includes('id')) {
      printContents += '<th style="width: 6%;">Id</th>'; // define a largura da célula como 20%
    }
    if (selectedFields.includes('nameDepartament')) {
      printContents += '<th style="width: 47%;">Nome</th>'; // define a largura da célula como 40%
    }
    if (selectedFields.includes('description')) {
      printContents += '<th style="width: 47%;">Descrição</th>'; // define a largura da célula como 40%
    }
    printContents += '</tr></thead><tbody>';
    // Adicionar linhas da tabela
    filteredTable.forEach(function(departament) {
      printContents += '<tr>';
      if (departament.id) {
        printContents += '<td style="width: 6%;">' + departament.id + '</td>';
      }
      if (departament.nameDepartament) {
        printContents += '<td style="width: 47%;">' + departament.nameDepartament + '</td>';
      }
      if (departament.description) {
        printContents += '<td style="width: 47%;">' + departament.description + '</td>';
      }
      printContents += '</tr>';
    });
    printContents += '</tbody></table>';
    // Abrir janela de impressão do navegador
    let popupWin = window.open('', '_blank', 'width=800,height=600');
    if (popupWin) {
      popupWin.document.open();
      popupWin.document.write('<html><head><title>Tabela de Departamentos</title>');
      popupWin.document.write('<style>@media print {table {page-break-inside: avoid;}}</style>'); // adiciona um estilo CSS para evitar que a tabela seja dividida em várias páginas
      popupWin.document.write('</head><body>' + printContents + '</body></html>');
      popupWin.document.close();
      popupWin.print();
    } else {
      console.log('Erro ao abrir janela de impressão.');
    }
  }
  
  

  

  public addDepartment() {
    this.router.navigate(['/addRegister']);
  }

  public editDepartment(id: number) {
    this.router.navigate(['/updateRegister/', id]);
  }

  public selectedDepartmentId(id: number) {
    this.filteredDepartments = this.departamentList.filter((department) => {
      return department.id === id;
    });
    this.hasResults = this.filteredDepartments.length > 0;
  } 


  public deleteDepartment(id: number) {
    if (confirm('Tem certeza que deseja excluir esse departamento?')) {
      this.departAPI.DeleteRegister(id).subscribe(
        () => {
          this.departAPI.GetAllRecords().subscribe(
            (departments) => {
              this.departamentList = departments;
              this.router.navigate(['/showRegister']).then(() => {
                window.location.reload();
              });
            },
            error => {
              console.log(error);
            }
          );
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  
}






























/*

printTable(): void {
    // Selecionar campos a serem impressos
    let selectedFields: any = []; // array com os campos selecionados pelo usuário
    // Filtrar a tabela com base nos campos selecionados
    let filteredTable = this.filteredDepartments.map(function(departament) {
      return {
        id: selectedFields.includes('id') ? departament.id : null,
        nameDepartament: selectedFields.includes('nameDepartament') ? departament.nameDepartament : null,
        description: selectedFields.includes('description') ? departament.description : null
      };
    });
    // Gerar visualização da tabela filtrada com os campos selecionados
    let printContents = '<table>';
    // Adicionar cabeçalho da tabela
    printContents += '<thead><tr>';
    if (selectedFields.includes('id')) {
      printContents += '<th>Id</th>';
    }
    if (selectedFields.includes('name')) {
      printContents += '<th>Nome</th>';
    }
    if (selectedFields.includes('description')) {
      printContents += '<th>Descrição</th>';
    }
    printContents += '</tr></thead><tbody>';
    // Adicionar linhas da tabela
    filteredTable.forEach(function(departament) {
      printContents += '<tr>';
      if (departament.id) {
        printContents += '<td>' + departament.id + '</td>';
      }
      if (departament.nameDepartament) {
        printContents += '<td>' + departament.nameDepartament + '</td>';
      }
      if (departament.description) {
        printContents += '<td>' + departament.description + '</td>';
      }
      printContents += '</tr>';
    });
    printContents += '</tbody></table>';
    // Abrir janela de impressão do navegador
    let popupWin = window.open('', '_blank', 'width=800,height=600');
    if (popupWin) {
      popupWin.document.open();
      popupWin.document.write('<html><head><title>Tabela de Departamentos</title></head><body>' + printContents + '</body></html>');
      popupWin.document.close();
      popupWin.print();
    } else {
      console.log('Erro ao abrir janela de impressão.');
    }
  }

*/