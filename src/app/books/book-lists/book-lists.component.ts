import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BookServiceService } from 'src/app/commen/book-service.service';
import { BookDetailModel, BookSearchModel, ListNameModel, SellerModel } from 'src/app/commen/model';
import { BookReviewsComponent } from '../book-reviews/book-reviews.component';

@Component({
  selector: 'app-book-lists',
  templateUrl: './book-lists.component.html',
  styleUrls: ['./book-lists.component.css']
})

export class BookListsComponent implements OnInit {
  displayedColumns = ['position', 'title', 'author', 'price', 'publisher', 'view'];
  dataSource = new MatTableDataSource<BookDetailModel>();
  bookList: BookDetailModel[] = [];
  listName: ListNameModel[] = [];
  seller: SellerModel[] = [];
  isRecords = false;

  //--- listName is manually setted to API
  bookForm: FormGroup = this.fb.group({
    listName: this.fb.control('hardcover fiction', [Validators.required]),
    bestsellersDate: this.fb.control(null),
    publishedDate: this.fb.control(null),
    offSet: this.fb.control(null)
  });

  constructor(private bookSvc: BookServiceService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.bookForm.get('listName')?.disable();
  }

  onSubmit() {
    if (this.bookForm.invalid) {
      return;
    }

    let bookSearch: BookSearchModel = <BookSearchModel>{};
    bookSearch = this.bookForm.getRawValue() as BookSearchModel;
    let reqParameter = bookSearch.bestsellersDate ? ('&bestsellers-date=' + this.datePipe.transform(new Date(bookSearch.bestsellersDate), 'yyyy-mm-dd')) : '';
    reqParameter = reqParameter + (bookSearch.publishedDate ? ('&published-date=' + this.datePipe.transform(new Date(bookSearch.publishedDate), 'yyyy-mm-dd')) : '');
    reqParameter = reqParameter + (bookSearch.offSet ? ((bookSearch.offSet % 20 == 0) ? ('&offset=' + bookSearch.offSet) : '') : '');
    // this.isRecords = false;
    this.bookSvc.getBookList(bookSearch.listName, reqParameter).subscribe(r => {
      this.seller = r.results as SellerModel[];
      this.seller.forEach(r => this.bookList.push(...r.book_details));
      this.dataSource = new MatTableDataSource<BookDetailModel>(this.bookList);
      console.log("A :", this.isRecords);
        setTimeout(() => {
          this.isRecords = !this.dataSource.data?.length ? true : false;
          console.log("B :", this.isRecords);
        }, 1000)
      console.log("C :", this.isRecords);
    })
  }

  openDialog(bookDetail: BookDetailModel) {
    const dialogConfig = {
      maxWidth: '500px',
      minWidth: '500px',
      maxHeight: '600px',
      minHeight: '300px',
    }

    this.dialog.open(BookReviewsComponent, {
      ...dialogConfig,
      data: { dataFromList: { ...bookDetail } }
    });
  }
}
