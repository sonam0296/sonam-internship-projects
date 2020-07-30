import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  email = 'vanita.bhoyar@appxbuild.com';
  password = '123456';
  message = '';
  isError = false
  isLoading = false;
  constructor(@Inject(DOCUMENT) private document: Document, private http: HttpClient, private api: ApiService,
    private customer: CustomerService, private router: Router, private httpService: HttpService) { }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
  }
  ngOnInit() {
    this.document.body.classList.add('login-page');
  }
  tryLogin($eventRef) {
    let $event = $eventRef
    this.isLoading = true;
    if (this.email == "" && this.password == "") {
      this.isError = true;
      this.message = "Username and Password is required";
      this.isLoading = false;
    } else {
      let url = this.httpService.serverUrl;
      let postData = {
        "username": this.email,
        "password": this.password
      }
      $event.target.disabled = true;

      this.http.post(url + "users/token.json", postData, httpOptions)
        .pipe().subscribe(
          data => {
            $event.target.disabled = false;
            if (data['success'] == true) {
              let token = data['data']['token'];
              console.log("=============>" + token)
              this.customer.setToken(token);
              // this.router.navigateByUrl('/home');
              this.generateOTP(this.email)
            }
            // this.isLoading = false;
          },
          HttpErrorResponse => {
            $event.target.disabled = false;
            this.isError = true;
            this.message = this.httpService.getErrorMessage(HttpErrorResponse);
            if (this.message == null) {
              this.message = "The login credentials are incorrect. Please try again."
              this.isLoading = false;
            }
            setTimeout(() => {
              this.isError = false;
            }, 6000);
          },
        );

    }

  }

  generateOTP(email: string) {
    this.isLoading = true;
    this.httpService.postHttp("users/generateOTP.json", { 'email': email })
      .pipe().subscribe(
        data => {
          if (data['success'] == true) {
            this.router.navigateByUrl('/otp');
          }
          this.isLoading = false;
        },
        HttpErrorResponse => {
          this.isError = true;
          this.message = this.httpService.getErrorMessage(HttpErrorResponse);
          if (this.message == null) {
            this.message = "The login credentials are incorrect. Please try again."
            this.isLoading = false;
          }

          setTimeout(() => {
            this.isError = false;
          }, 6000);
        },
      );
  }
  reset() {
    this.email = "";
    this.password = "";
  }
}
