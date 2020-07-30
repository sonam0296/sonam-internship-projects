import {Injectable} from '@angular/core';

const TOKEN = 'TOKEN';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  getToken(): void {
    localStorage.getItem(TOKEN) != null;
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
}