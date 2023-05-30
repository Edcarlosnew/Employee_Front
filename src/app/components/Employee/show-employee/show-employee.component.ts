import { Component } from '@angular/core';
import { EmployeeApiService } from 'src/app/serviceAPI/employee-api.service';
import { EmployeeInterface } from 'src/app/model/EmployeeInterface';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';




@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent {

  employeeList: EmployeeInterface[] = [];
  filteredEmployees: EmployeeInterface[] = [];
  nameFilter: string = "";
  idFilter: number | undefined;
  titleComp: string = "Lista de Funcionários";
  hasResults: boolean = true;
  insertRegisterEmployee: any;

  constructor(private EmpAPI: EmployeeApiService, private router: Router,private currencyPipe: CurrencyPipe) {}

  ngOnInit() {
    // Carrega a toda a lista de Funcionários
    this.loadEmployeeList();    
  }

  // Carrega toda A lista de Funcionários
  loadEmployeeList(): any{
    this.EmpAPI.GetAllRecordsEmployee().subscribe(
      (data) => {
        this.employeeList = data;
        this.clearFilters();
      },
      (error) => console.log(error)
      );    
  }
      
      

  // Filtra os Funcionários
  filterEmployees() {
      this.filteredEmployees = this.employeeList.filter((employee) => {
        if (this.idFilter !== undefined && employee.id === this.idFilter) {
          return true;
        }
        if(
          this.nameFilter !== '' &&
          employee.nameEmployee.toLowerCase().includes(this.nameFilter.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
      this.hasResults = this.filteredEmployees.length > 0;
    }
  


  // Limpa os filtros
  clearFilters(): void {
    this.filteredEmployees = this.employeeList;
    this.nameFilter = '';
    this.idFilter = undefined;
    this.hasResults = true;
  }


  printEmployee(): void {
    // Selecionar campos a serem impressos
    let selectedFields: string[] = ['id', 'nameEmployee', 'cpf',];
    // Filtrar a tabela com base nos campos selecionados
    let filteredTable = this.filteredEmployees.map(function(employee) {
      return {
        id: employee.id,
        nameEmployee: employee.nameEmployee,
        cpf: employee.cpf
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
    if (selectedFields.includes('nameEmployee')) {
      printContents += '<th style="width: 47%;">Funcionário</th>'; // define a largura da célula como 40%
    }
    if (selectedFields.includes('cpf')) {
      printContents += '<th style="width: 47%;">CPF</th>'; // define a largura da célula como 40%
    }
    printContents += '</tr></thead><tbody>';
    // Adicionar linhas da tabela
    filteredTable.forEach(function(employee) {
      printContents += '<tr>';
      if (employee.id) {
        printContents += '<td style="width: 6%;">' + employee.id + '</td>';
      }
      if (employee.nameEmployee) {
        printContents += '<td style="width: 47%;">' + employee.nameEmployee + '</td>';
      }
      if (employee.cpf) {
        printContents += '<td style="width: 47%;">' + employee.cpf + '</td>';
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
   
   

  public addEmployee() {
    this.router.navigate(['/addRegisterEmployee']);
  }

  public editEmployee(id: number) {
    this.router.navigate(['/updateEmployee/', id]);
  }
 

  public selectedEmployeeId(id: number) {
    this.filteredEmployees = this.employeeList.filter((employee) => {
      return employee.id === id;
    });
    this.hasResults = this.filteredEmployees.length > 0;
  }

  public deleteEmployee(id: number) {
    if (confirm('Tem certeza que deseja excluir esse Funcionário?')) {
      this.EmpAPI.DeleteRegisterEmployee(id).subscribe(
        () => {
          this.EmpAPI.GetAllRecordsEmployee().subscribe(
            (employees) => {
              this.employeeList = employees;
              this.router.navigate(['/showEmployee']).then(() => {
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





