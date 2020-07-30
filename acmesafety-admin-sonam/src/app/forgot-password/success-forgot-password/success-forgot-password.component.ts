import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-success-forgot-password',
  templateUrl: './success-forgot-password.component.html',
  styleUrls: ['./success-forgot-password.component.css']
})
export class SuccessForgotPasswordComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
  }
  ngOnInit() {
    this.document.body.classList.add('login-page');
  }

}
