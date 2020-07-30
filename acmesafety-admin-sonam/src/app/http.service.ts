import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Router} from "@angular/router";
import { map } from 'rxjs/operators';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'Authorization': "Bearer " + localStorage.getItem("TOKEN")
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  message : any;

  serverUrl: string = "http://api-acmesafety.o2t2.com/api/";
//  serverUrl: string = "http://localhost:8765/api/";
  constructor(private router: Router ,private http: HttpClient) { }

  getHttp(url: string) {

    return this.http.get(this.serverUrl + url,this.getHttpOptions())
  }

  getHttpWithoutToken(url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.get(this.serverUrl + url, httpOptions)
  }

   postHttpWithoutToken(url: string, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.post(this.serverUrl + url, data, httpOptions)
  }

  postHttp(url: string, data) {
    return this.http.post(this.serverUrl + url, data,this.getHttpOptions())
  }
  putHttp(url: string, data) {

    return this.http.put(this.serverUrl + url, data,this.getHttpOptions())
  }

  deleteHttp(url) {

    return this.http.delete(this.serverUrl + url,this.getHttpOptions())
  }

  getHttpOptions(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("TOKEN")
      })
    };
    return httpOptions;
  }

  
  getErrorMessage(error){
    if(error.status === 500){
      this.message = "Internal Server Error. Please try after sometime";
    }else if(error.status === 404){
         this.message = "Request Not Found";
    }
    return this.message;
  }


  loadUsers(filter = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 3, url: string) {
    return this.http.get(this.serverUrl + url, {
      params: new HttpParams()
        .set('filter', filter)
        .set('sort', sortOrder)
        .set('page', (pageNumber + 1).toString())
        .set('limit', pageSize.toString()),
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': "Bearer " + localStorage.getItem("TOKEN")
        })
    }).pipe(
      map((response: any) => ({
        users: response['data'],
        pagination: response['pagination']
      } as any))
    );
  }
}
