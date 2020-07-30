import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  isSuccess = false;
  isError = false;
  message = "";
  isLoading = false;
  USERS_STATUSES_ID = 6;
  formData = [
    { for: "username", control: "input", type: "text", label: "Username", placeholder: "Enter username", id: "username", control_name: "username", required: "required" },
    { for: "password", control: "input", type: "password", label: "Password", placeholder: "Enter password", id: "password", control_name: "password", required: "required" },
    { for: "first_name", control: "input", type: "text", label: "First Name", placeholder: "Enter First Name", id: "first_name", control_name: "first_name" },
    { for: "last_name", control: "input", type: "text", label: "Last Name", placeholder: "Enter Last Name", id: "last_name", control_name: "last_name" },
    { for: "email", control: "input", type: "text", label: "Email", placeholder: "Enter Email", id: "email", control_name: "email", required: "required" },
    { for: "mobile", control: "input", type: "text", label: "Mobile Number", placeholder: "Enter Mobile Number", id: "mobile", control_name: "mobile" },
    { for: "user_status_id", control: "select", type: "null", label: "Status", placeholder: "Select Status", id: "user_status_id", control_name: "user_status_id", array: null, required: "required" },
  ]

  customForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z0-9!@#$%^&*()]+$')]],
    first_name: ['', [Validators.minLength(4)]],
    last_name: ['', [Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.minLength(4), Validators.email]],
    mobile: ['', [Validators.required, , Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    user_status_id: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private http: HttpService) { }

  ngOnInit() {
    // load all user Statuses
    this.http.getHttp("UserStatuses.json").subscribe(data => {
      console.log(data);
      this.formData[this.USERS_STATUSES_ID].array = (data);
    },
    error => {
      this.isError = true;
      this.hideMessage();
      this.message = this.http.getErrorMessage(error);
    });
  }
  onSubmit() {
    console.warn(this.customForm.value);
    this.showLoading();
    this.customForm.disable();
    this.customForm.value.active = 1;
    this.http.postHttp("users/add.json", this.customForm.value)
      .pipe().subscribe(
        data => {
          if (data['success'] == true) {
            this.isSuccess = true;
            this.hideMessage();
            this.message = (data['data']['message']);
            this.customForm.reset();
          } if (data['success'] == false) {
            this.isError = true;
            this.hideMessage();
            this.message = (data['data']['error_message']);
          }
          this.isLoading = false;
          this.customForm.enable();
        },
        error => {
          this.customForm.enable();
          this.isError = true;
          this.hideMessage();
          this.message = this.http.getErrorMessage(error);
          this.isLoading = false;
        });


  }
  get user_status_id() {
    return this.customForm.get("user_status_id");
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
