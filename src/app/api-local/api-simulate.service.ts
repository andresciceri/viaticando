import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const Trips = [
      {id: 1, expenses : [{id : 1, nit : "23423342",category: {id: 1, name: "Alimentación"}, date: "2017-04-07T20:39:56.121224Z", description : "", value : 10000}], budget : 500000, startDate : "2017-04-07T20:39:56.121224Z", endDate : "2017-04-07T20:39:56.121224Z", destiny : "Cali", description : "", status : {id : 1, name : "Estado 1"}, employee: {id : 1, firstName : "Victor", lastName : "Suarez", email : "victor.suarez@empresauno.com", organization : {id: 1, name: "Empresa 1"}}},
      {id: 2, expenses : [], budget : 800000, startDate : "2017-04-07T20:39:56.121224Z", endDate : "2017-04-07T20:39:56.121224Z", destiny : "Medellin", description : "", status : {id : 1, name : "Estado 1"}, employee: {id : 1, firstName : "Luis", lastName : "Perez", email : "luis.perez@empresauno.com", organization : {id: 1, name: "Empresa 1"}}}
    ];

    const expenses = [
      {id : 1, nit : "23423342", category : {id: 1, name: "Alimentación"},  date: "2017-04-07T20:39:56.121224Z", description : "", value : 10000}
    ];

    const status = [
      {id : 1, name : "Estado 1"}
    ];

    const Users = [
      {id : 1, firstName : "Victor", lastName : "Suarez", email : "victor.suarez@empresauno.com", organization : {id: 1, name: "Empresa 1"}},
      {id : 2, firstName : "Luis", lastName : "Perez", email : "luis.perez@empresauno.com", organization : {id: 1, name: "Empresa 1"}}
    ];

    const organizations = [
      {id: 1, name: "Empresa 1"}
    ];

    return {Trips, expenses, status, Users};
  }
}