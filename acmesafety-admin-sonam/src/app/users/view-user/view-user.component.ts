import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { Users } from 'src/app/model/users.model';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: Users;
  message: any;
  isError = false;

  constructor(private route: ActivatedRoute, private httpService:HttpService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['userId'];
      this.httpService.getHttp("users/" + id + ".json").subscribe(data => {
        this.user = data['data'];
      },
      error => {
        this.isError = true;
        this.hideMessage();
        this.message = error.error.message;
      });
    });
  }
  hideMessage() {
    setTimeout(() => {
      this.isError = false;
    }, 6000);
  }
}
