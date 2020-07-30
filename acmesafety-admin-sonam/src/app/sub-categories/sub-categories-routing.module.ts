import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubCategoriesComponent } from './sub-categories.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { EditSubCategoryComponent } from './edit-sub-category/edit-sub-category.component';
import { ViewSubCategoryComponent } from './view-sub-category/view-sub-category.component';

const routes: Routes = [
  { path: '', component: SubCategoriesComponent },
  { path: 'add', component: AddSubCategoryComponent },
  { path: 'edit/:categoryId', component: EditSubCategoryComponent },
  { path: 'view/:categoryId', component: ViewSubCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCategoriesRoutingModule { }
