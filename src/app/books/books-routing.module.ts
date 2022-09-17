import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListsComponent } from './book-lists/book-lists.component';
import { BookReviewsComponent } from './book-reviews/book-reviews.component';
import { BooksComponent } from './books.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  }, {
    path: 'book-list',
    component: BookListsComponent,
  }, {
    path: 'book-reviews',
    component: BookReviewsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
