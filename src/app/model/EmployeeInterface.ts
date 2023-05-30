/*
 Implementar um conjunto de props para servirem como model
 para a manipulação dos dados dentro do front

 exportar este contexto do model para que seja exposto para todo projeto front
 */

 export interface EmployeeInterface{
   id: number
   nameEmployee: string
   cpf: string
   rg: string
   expeditionAgency: string
   hiringDate: Date
   //photo: string
   departamentId: number
   mobilePhone: string
   address:string
   complement: string
   neighborhood: string
   state: string
   city: string
   zipCode: string
   salary: number

 }