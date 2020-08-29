import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError} from "rxjs";
import { User } from "./user.model";
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from "../store/app.reducer";
import * as AuthActions from "./store/auth.actions";

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
  }
  
  @Injectable({ providedIn: 'root' })
  export class AuthService {
    // user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any;
  
    constructor(
      private http: HttpClient,
      private router: Router,
      private store: Store<fromApp.AppState>
    ) {}
  
    logout() {
      // this.user.next(null);
      this.store.dispatch(new AuthActions.Logout());
      localStorage.removeItem('userData');
      if (this.tokenExpirationTimer) {
        clearTimeout(this.tokenExpirationTimer);
      }
      this.tokenExpirationTimer = null;
    }
  
    setLogoutTimer(expirationDuration: number) {
      this.tokenExpirationTimer = setTimeout(() => {
        this.store.dispatch(new AuthActions.Logout());
      }, expirationDuration);
    }
    clearLogoutTimer(){
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
            this.tokenExpirationTimer = null;
        }
    }
    
  }
  