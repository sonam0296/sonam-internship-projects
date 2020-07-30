import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, FormControlName } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/model/users.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  hide = true;
  user: Users;
  id: any;
  isSuccess = false;
  isError = false;
  message = "";
  isLoading = false;
  USER_STATUSES_ID = 6;
  formData = [
    { for: 'username', control: 'input', type: 'text', label: 'Username', placeholder: 'Enter username', id: 'username', control_name: 'username', required: 'required' },
    { for: 'password', control: 'password', type: 'password', label: 'Password', placeholder: 'Enter password', id: 'password', control_name: 'password'},
    { for: 'first_name', control: 'input', type: 'text', label: 'First Name', placeholder: 'Enter First Name', id: 'first_name', control_name: 'first_name' },
    { for: 'last_name', control: 'input', type: 'text', label: 'Last Name', placeholder: 'Enter Last Name', id: 'last_name', control_name: 'last_name' },
    { for: 'email', control: 'input', type: 'text', label: 'Email', placeholder: 'Enter Email', id: 'email', control_name: 'email', required: 'required' },
    { for: 'mobile', control: 'input', type: 'text', label: 'Mobile Number', placeholder: 'Enter Mobile Number', id: 'mobile', control_name: 'mobile' },
    { for: 'user_status_id', control: 'select', type: 'null', label: 'Status', placeholder: 'Select Status', id: 'user_status_id', control_name: 'user_status_id', array: null, required: 'required' },
  ];

  customForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.minLength(6), Validators.pattern('^[a-zA-Z0-9!@#$%^&*()]+$')]],
    first_name: ['', [Validators.minLength(4)]],
    last_name: ['', [Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.minLength(4), Validators.email]],
    mobile: ['', [Validators.required, , Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    user_status_id: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {

    // load all user Statuses
    this.http.getHttp('UserStatuses.json').subscribe(data => {
      this.formData[this.USER_STATUSES_ID].array = (data);
    },
      error => {
        this.isError = true;
        this.hideMessage();
        this.message = error.error.message;
      });
    // fetch users
    this.route.params.subscribe(params => {
      this.id = params.userId;
      this.http.getHttp('users/' + this.id + '.json').subscribe(data => {
        this.user = data['data'];
        this.customForm.patchValue(this.user);
      });
    });

  }
  onSubmit() {
    // console.warn(this.customForm.value);
    this.showLoading();
    this.customForm.disable();

    // tslint:disable-next-line:prefer-const
    let postData: string = JSON.stringify(this.customForm.value);
    const postJson: any = JSON.parse(postData);
    // if password is not set we just need to delete the password from
    // json object
    if (postJson.password === '') {
      delete postJson.password;
    }
    this.http.putHttp('users/' + this.id + '.json', postJson)
      .pipe().subscribe(
        data => {
          if (data['success'] == true) {
            this.isSuccess = true;
            this.hideMessage();
            this.message = "User Updated Successfully!";
          }
          if (data['success'] == false) {
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
          this.message = error.error.message;
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
