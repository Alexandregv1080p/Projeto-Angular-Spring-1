import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let token = sessionStorage.getItem('token')
    if(token){
      console.log(token + " Passei pelo interceptor ")
      request = request.clone({headers:request.headers.set('Authorization','Bearer ' + token)})
    }
    
    
    return next.handle(request);
  }
}
