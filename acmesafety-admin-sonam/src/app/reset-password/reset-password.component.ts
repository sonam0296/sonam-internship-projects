import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   })
// };



@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  isError = false;
  isSuccess = false;
  isLoading = false;
  message = "";
  newPasswordHide = true;
  confirmPasswordHide = true;
  passwordArray = [this.newPasswordHide, this.confirmPasswordHide];

  formData = [
    { for: "password", control: "input", type: "text", label: "New Password", placeholder: "New Password", id: "password", control_name: "password", required: "required" },
    { for: "confirm_password", control: "input", type: "text", label: "Confirm New Password", placeholder: "Confirm New Password", id: "confirm_password", control_name: "confirm_password", required: "required" },
  ]

  customForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z0-9!@#$%^&*()]+$')]],
    confirm_password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z0-9!@#$%^&*()]+$')]],
  });
  key: any;
  constructor(@Inject(DOCUMENT) private document: Document, private fb: FormBuilder, private http: HttpService, private route: ActivatedRoute) { }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
  }
  ngOnInit() {
    this.document.body.classList.add('login-page');
    this.route.queryParams.subscribe(params => {
      this.key = params['key'];
    });
  }
  onSubmit() {
    this.customForm.disable();
    this.showLoading();
    this.http.postHttpWithoutToken("users/resetPassword.json?key=" + this.key, this.customForm.value)
      .pipe().subscribe(
        data => {
          this.customForm.enable();
          if (data['success'] == true) {
            this.isSuccess = true;
            this.hideMessage();
            this.message = (data['data']['message']);
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
          this.message = this.http.getErrorMessage(error);
          this.isLoading = false;
        });
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