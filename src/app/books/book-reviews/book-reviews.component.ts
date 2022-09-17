import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookServiceService } from 'src/app/commen/book-service.service';
import { BookDetailModel, ReviewModel } from 'src/app/commen/model';

@Component({
  selector: 'app-book-reviews',
  templateUrl: './book-reviews.component.html',
  styleUrls: ['./book-reviews.component.css']
})
export class BookReviewsComponent implements OnInit {
  bookReviewLsit: ReviewModel[] = [];
  isRecords = false;

  constructor(public dialogRef: MatDialogRef<BookReviewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bookSvc: BookServiceService,) { }

  ngOnInit(): void {
    this.getBookReview();
  }

  getBookReview() {
    let parameter = '';
    let bookDetail: BookDetailModel = <BookDetailModel>{};
    bookDetail = { ...this.data.dataFromList };
    bookDetail.author = null as any; //delete
    parameter = bookDetail.primary_isbn10 ? ('?isbn=' + bookDetail.primary_isbn10) : '';
    parameter = parameter + (bookDetail.title ? ('&title=' + bookDetail.title) : '');
    parameter = parameter + (bookDetail.author ? ('&author=' + bookDetail.author) : '');

    this.bookSvc.getBookReview(parameter).subscribe(r => {
      this.bookReviewLsit = r.results as ReviewModel[];
      this.isRecords = !this.bookReviewLsit?.length ? true : false;
    })
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

  closePopUp() {
    this.dialogRef.close();
  }
}
