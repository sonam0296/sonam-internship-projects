import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Users } from '../model/users.model';
import { UsersDataSource } from './users-data-source';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  pagination: any
  userCount = 0;
  filter = '';
  direction = 'asc';
  user: Users
  displayedColumns = ['id', 'username', 'first_name', 'last_name', 'email', 'mobile', 'user_status', 'action'];
  userDataSource: UsersDataSource;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('input', { static: true }) input: ElementRef;
  message: any;
  loading = false;
  isSuccess = false;
  isError = false;

  constructor(private http: HttpService, private route: ActivatedRoute) { }
  ngOnInit() {
    // this.loadData();
    this.user = this.route.snapshot.data["user"];
    this.userDataSource = new UsersDataSource(this.http);
    this.userDataSource.loadUsers(this.input.nativeElement.value, 'asc', 0, 3);
  }
  ngAfterViewInit() {
    // server-side search
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadUsersPage(this.input.nativeElement.value, this.direction, this.paginator.pageIndex, this.paginator.pageSize);
        })
      )
      .subscribe();
    this.paginator.page
      .pipe(
        tap(() => this.loadUsersPage(this.input.nativeElement.value, this.direction, this.paginator.pageIndex, this.paginator.pageSize))
      )
      .subscribe();
  }

  loadUsersPage(filter, direction, index, size) {
    this.userDataSource.loadUsers(filter, direction, index, size);
  }
  // loadData() {
  //   this.loading = true;
  //   this.http.getAllUsers("users.json").subscribe(data => {
  //     this.loading = false;
  //     this.users = data;
  //     this.updateMatTable();
  //   },
  //     error => {
  //       this.isError = true;
  //       this.hideMessage();
  //       this.message = this.httpService.getErrorMessage(error);
  //     });
  // }

  deleteUser(id, userId) {
    this.loading = true;
    this.http.deleteHttp("users/" + id + ".json").subscribe(data => {
     if (data['success'] == true) {
        // this.loadData();
        this.loadUsersPage(this.input.nativeElement.value, this.direction, this.paginator.pageIndex, this.paginator.pageSize);
        this.isSuccess = true;
        this.hideMessage();
        this.message = (data['data']['message']);
      } else if (data['success'] == false) {
        this.isError = true;
        this.hideMessage();
        this.message = (data['data']['error_message']);
      }
      this.loading = false;
    },
      error => {
        this.loading = false;
        this.isError = true;
        this.hideMessage();
        this.message = error.error.message;
      });
  }
  hideMessage() {
    setTimeout(() => {
      this.isSuccess = false;  //boolean used because of bootstrap property only msg disapper inside container but the container still remains
      this.isError = false;
    }, 6000);
  }

}



