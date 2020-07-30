import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";


@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    // MatAutocompleteModule
    // BrowserModule,
  ]
})
export class SharedModule { }
