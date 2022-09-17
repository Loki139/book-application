import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SellerModel, APIResponseModel, ListNameModel } from './model';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private baseUrl: string = 'https://api.nytimes.com/svc/books/v3';
  constructor(private http: HttpClient) { }

  getBookList(listName: string, parameter: string) {
    return this.http.get<APIResponseModel>(this.baseUrl + '/lists.json' + '?list=' + listName + parameter);
  }

  getBookReview(parameter: string){
    return this.http.get<APIResponseModel>(this.baseUrl+ '/reviews.json'  + parameter);
  }
}
