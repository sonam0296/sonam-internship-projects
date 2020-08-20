import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: ()=> import('./recipes/recipes.module').then(m => m.RecipesModule) },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

  // { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
  // Instead of using the above syntax alternative syntax is =
  //  { path: 'recipes', loadChildren: ()=> import('./recipes/recipes.module').then(m => m.RecipesModule) }
