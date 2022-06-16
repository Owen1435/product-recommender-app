import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
  ) {}

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token')
    const authReq = token ? req.clone({
      headers: req.headers.set('Authorization', 'token ' + token),
    }) : req

    return next.handle(authReq).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse)
            console.log('Server response', event)
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            console.log('Error response', err)
            err.status == 401 && this.router.navigate(['/login'])
          }
        }
      )
    )
  }
}
