import { Injectable } from '@angular/core';
const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor() { }
  
  // User logout. Removed Session Storage
  logout() {
    localStorage.setItem('isLogged', "false");
    localStorage.removeItem(TOKEN);
  } 
  
}
