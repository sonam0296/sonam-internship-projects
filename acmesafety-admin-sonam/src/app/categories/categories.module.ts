import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CategoriesComponent, AddCategoryComponent, EditCategoryComponent, ViewCategoryComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule
  ]
})
export class CategoriesModule { }
