import { Component } from '@angular/core';
const TOKEN = 'TOKEN';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'acmesafety-admin';
  isLogin = false;

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
}
