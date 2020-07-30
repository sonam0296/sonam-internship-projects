import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubCategoriesRoutingModule } from './sub-categories-routing.module';
import { SubCategoriesComponent } from './sub-categories.component';
import { ViewSubCategoryComponent } from './view-sub-category/view-sub-category.component';
import { EditSubCategoryComponent } from './edit-sub-category/edit-sub-category.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SubCategoriesComponent, ViewSubCategoryComponent, EditSubCategoryComponent, AddSubCategoryComponent],
  imports: [
    CommonModule,
    SubCategoriesRoutingModule,
    SharedModule
  ]
})
export class SubCategoriesModule { }
