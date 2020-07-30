import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { DOCUMENT } from '@angular/common';
import { BASE_URL } from '../AppConstants';
import { Router } from '@angular/router';

HttpService
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  base_url = BASE_URL;
  errors: any;
  message: any;
  isError = false;
  isSuccess = false;
  isLoading = false;
  constructor(@Inject(DOCUMENT) private document: Document, private fb: FormBuilder, private httpService: HttpService,private router: Router) { }
  customForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
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
      email: this.customForm.value.email,
      base_url: this.base_url
    }
    this.httpService.postHttpWithoutToken("users/forgotPassword.json", JSON.stringify(postData))
      .pipe().subscribe(
        data => {
          this.customForm.enable();
          if (data['success'] == true) {
            this.isSuccess = true;
            this.hideMessage();
            this.message = (data['data']['message']);
            this.router.navigateByUrl('/success-forgot-password');
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
