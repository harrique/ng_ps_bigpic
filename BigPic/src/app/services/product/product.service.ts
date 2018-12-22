import { Injectable } from '@angular/core';
import { IProduct } from '../../model/product';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl: string;

  constructor(private http: HttpClient) {

    this.productUrl = 'api/products/products.json';

  }

  getProducts(): Observable<IProduct[]> {

    return this.http.get<IProduct[]>(this.productUrl)
    .pipe(
      tap(data => console.log(JSON.stringify(data)),
      catchError(this.handleError))
    );

  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
