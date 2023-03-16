import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginserviceService {
  redirectUrl!: string;
  baseUrl: string = 'http://localhost/PHP/homebaking-php';

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  public userLogin(email: any, password: any) {
    return this.httpClient
      .post<any>(this.baseUrl + '/login.php', {
        email,
        password,
      })
      .pipe(
        map((Users) => {
          this.setToken(Users.email);
          this.getLoggedInName.emit(true);
          return Users;
        })
      );
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const userToken = this.getToken();
    if (userToken != null) {
      return true;
    } else {
      return false;
    }
  }
}
