import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import {environment} from "../../../environments/environment";
import {Review} from "../../model/review";
import {AddProductReviewRequestDto} from "../../model/dto/add-product-review.request.dto";

@Injectable()
export class ProductService {
  public productsApiUrl = environment.apiUrl + '/products';
  public reviewsApiUrl = environment.apiUrl + '/reviews';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsApiUrl)
      .pipe(
        catchError(this.handleError<Product[]>('get products', []))
      );
  }

  getProduct(id: number): Observable<Product | null> {
    return this.http.get<Product[]>(this.productsApiUrl)
      .pipe(
        map(products => products.find(product => product.id === id) || null),
        catchError(this.handleError<Product>('get product by id', {} as Product))
      );
  }

  getProductReviews(id: number): Observable<Review[]> {
    const url = `${this.reviewsApiUrl}/${id}`
    return this.http.get<Review[]>(url)
      .pipe(
        catchError(this.handleError<Review[]>('get product reviews', []))
      );
  }

  addProductReview(id: number, dto: AddProductReviewRequestDto): Observable<any> {
    const url = `${this.reviewsApiUrl}/${id}`
    return this.http.post<any>(url, dto, this.httpOptions)
      .pipe(
        map(resp => ({...resp, productId: id})) //todo ?
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);
      return of(result as T);
    };
  }
}
