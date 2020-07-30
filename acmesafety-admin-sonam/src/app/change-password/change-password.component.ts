import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  currenPasswordHide  = true;
  newPasswordHide  = true;
  confirmPasswordHide  = true;
  passwordArray = [this.currenPasswordHide,this.newPasswordHide,this.confirmPasswordHide];
  user: any;
  isSuccess = false;
  isError = false;
  message = "";
  isLoading = false;
  formData = [
    { for: "current_password", control: "input", type: "password", label: "Current Password", placeholder: "Current Passwrod", id: "current_password", control_name: "currentPassword", required: "required" },
    { for: "new_password", control: "input", type: "password", label: "New Password", placeholder: "New Password", id: "new_password", control_name: "newPassword", required: "required" },
    { for: "confirm_password", control: "input", type: "password", label: "Confirm New Password", placeholder: "Confirm New Password", id: "confirm_password", control_name: "confirmPassword", required: "required" },
  ]


  customForm = this.fb.group({
    currentPassword: ['', [Validators.required, Validators.minLength(6)]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder, private http: HttpService) { }

  ngOnInit() { }
  onSubmit() {
    this.showLoading();
    this.customForm.disable();
    this.http.putHttp("users/changePassword.json", this.customForm.value)
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
        error =>{
          this.customForm.enable();
          this.isError = true;
          this.hideMessage();
          this.message = this.http.getErrorMessage(error);
          this.isLoading = false;
     });
  }
  showLoading(){
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
