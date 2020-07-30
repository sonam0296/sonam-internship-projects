import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { HttpClient } from 'selenium-webdriver/http';
import { Validators, FormBuilder } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  errors: any;
  message: any;
  isError = false;
  isSuccess = false;
  isLoading = false;
  isResendOTPLoading=false;
  constructor(@Inject(DOCUMENT) private document: Document, private fb: FormBuilder, private httpService: HttpService
    , private router: Router, private customer: CustomerService
  ) { }
  customForm = this.fb.group({
    otp: ['', [Validators.required]]
  })
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
  }
  ngOnInit() {
    this.document.body.classList.add('login-page');
  }
  onSubmit() {
    this.customForm.disable();
    this.showLoading();
    console.log(this.customForm.value);
    let postData = {
      "otp": this.customForm.value.otp
    }
    this.httpService.postHttp("users/verifyOTP.json", JSON.stringify(postData))
      .pipe().subscribe(
        data => {
          this.customForm.enable();
          if (data['success'] == true) {
            // this.isSuccess = true;
            // this.hideMessage();
            // this.message = (data['data']['message']);
            let token = data['data']['token'];
            console.log("=============>" + token)
            this.customer.setToken(token);
            this.router.navigateByUrl('/home');
          }
          if (data['success'] == false) {
            this.isError = true;
            this.hideMessage();
            this.message = (data['data']['error_message']);
          }
          this.isLoading = false;
        },
        error => {
          this.customForm.enable();
          this.isError = true;
          this.hideMessage();
          this.message = this.httpService.getErrorMessage(error);
          this.isLoading = false;
        });
  }
  generateOTP() {
    this.isResendOTPLoading = true;
    this.httpService.postHttp("users/generateOTP.json", { })
      .pipe().subscribe(
        data => {
          if (data['success'] == true) {
            this.router.navigateByUrl('/otp');
          }
          this.isResendOTPLoading = false;
        },
        HttpErrorResponse => {
          this.isError = true;
          this.message = this.httpService.getErrorMessage(HttpErrorResponse);
          if (this.message == null) {
            this.message = "The login credentials are incorrect. Please try again."
            this.isResendOTPLoading = false;
          }

          setTimeout(() => {
            this.isError = false;
          }, 6000);
        },
      );
  }
  get email() {
    return this.customForm.get("email");
  }

  showLoading() {
    this.isSuccess = false;
    this.isError = false;
    this.isLoading = true;
  }
  hideMessage() {
    setTimeout(() => {
      this.isSuccess = false;
      this.isError = false;
    }, 6000);
  }
}
