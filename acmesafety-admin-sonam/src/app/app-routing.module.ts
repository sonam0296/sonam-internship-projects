import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NeedAuthGuard } from './auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SuccessForgotPasswordComponent } from './forgot-password/success-forgot-password/success-forgot-password.component';
import { OtpComponent } from './otp/otp.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';




const routes: Routes = [

  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent },

      { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },

      { path: 'change-password', component: ChangePasswordComponent },

      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },

      { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },

      { path: 'sub-categories', loadChildren: () => import('./sub-categories/sub-categories.module').then(m => m.SubCategoriesModule) },

    ], canActivate: [NeedAuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent
  },
  {
    path: 'success-forgot-password', component: SuccessForgotPasswordComponent
  },
  {
    path: 'reset-password', component: ResetPasswordComponent
  },
  {
    path: 'otp', component: OtpComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
