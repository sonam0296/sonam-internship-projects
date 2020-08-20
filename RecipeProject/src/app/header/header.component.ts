import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSubs : Subscription;

  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService){}

    ngOnInit(){
      this.userSubs = this.authService.user.subscribe(
        user =>{
          // this.isAuthenticated = !user ? false : true; instead of this we can write
          this.isAuthenticated = !!user;
          console.log(!user);
          console.log(!!user);
        }
      );
    }

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }
  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }
  onLogout(){
    this.authService.logout();
  }
  ngOnDestroy(){
    this.userSubs.unsubscribe();
  }
}
