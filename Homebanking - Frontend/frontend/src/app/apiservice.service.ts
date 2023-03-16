import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movements } from './movements';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private httpClient: HttpClient) {
    // Fazendo conexao com o Backend
  }
  apiUrl = 'http://localhost:3000/movements_list';

  getAllData(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}`);
  }

  addDepositFund(data: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}`, data);
  }

  removeDeposit(id: any): Observable<any> {
    let ids = id;
    return this.httpClient.delete(`${this.apiUrl}/${ids}`);
  }
}
