import {
  HttpEvent, HttpHandler, HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  private apiKey = 'YqounzcfWGMow3bihJYemosAOSTf51UN';
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tempUrl = request.clone({ url: request.url + '&api-key=' + this.apiKey });
    return next.handle(tempUrl);
  }
}
