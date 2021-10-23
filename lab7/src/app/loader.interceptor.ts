import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderServeService } from './loader-serve.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService:LoaderServeService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    this.loaderService.setLoader(true);
    const updatedRequest = request.clone({
      headers: request.headers.append('Accept-language', 'en'),
      params: request.params.append('limit', '5'),
    });
    console.log(updatedRequest);
    return next
      .handle(updatedRequest)
      .pipe(finalize(() => this.loaderService.setLoader(false)));
  }
}
