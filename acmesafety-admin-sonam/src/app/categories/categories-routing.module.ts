import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'add', component: AddCategoryComponent },
  { path: 'edit/:categoryId', component: EditCategoryComponent },
  { path: 'view/:categoryId', component: ViewCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
