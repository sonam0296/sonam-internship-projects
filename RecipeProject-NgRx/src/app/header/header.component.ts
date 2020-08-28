import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription, pipe } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from "../store/app.reducer";
import { map } from 'rxjs/operators';
import * as AuthActions from "../auth/store/auth.actions";
import * as RecipesActions from "../recipes/store/recipe.actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSubs : Subscription;

  constructor(
    private store: Store<fromApp.AppState>){}

    ngOnInit(){
      this.userSubs = this.store
      .select('auth')
      .pipe(map(authState=>authState.user))
      .subscribe(
        user =>{
          // this.isAuthenticated = !user ? false : true; instead of this we can write
          this.isAuthenticated = !!user;
          console.log(!user);
          console.log(!!user);
        }
      );
    }

  onSaveData(){
    // this.dataStorageService.storeRecipes();
    this.store.dispatch(new RecipesActions.StoreRecipes());
  }
  onFetchData(){
    // this.dataStorageService.fetchRecipes().subscribe();
    this.store.dispatch(new RecipesActions.FetchRecipes());
  }
  onLogout(){
    // this.authService.logout();
    this.store.dispatch(new AuthActions.Logout());
  }
  ngOnDestroy(){
    this.userSubs.unsubscribe();
  }
}
