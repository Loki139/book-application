import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BookListsComponent } from './book-lists/book-lists.component';
import { BookReviewsComponent } from './book-reviews/book-reviews.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../features/material.module';

@NgModule({
  declarations: [
    BookListsComponent,
    BookReviewsComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BooksModule { }
