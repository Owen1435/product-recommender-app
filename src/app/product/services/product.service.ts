import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import {environment} from "../../../environments/environment";

@Injectable()
export class ProductService {
  public apiUrl = environment.apiUrl + '/products/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<Product[]>('get products', []))
      );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product[]>(this.apiUrl)
      .pipe(
        map(products => products.find(product => product.id === id) || {} as Product),
        catchError(this.handleError<Product>('get products', {} as Product))
      );
  }

  // getHero(id: number): Observable<Hero> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.get<Hero>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Hero>(`getHero id=${id}`))
  //   );
  // }
  //
  // updateHero(hero: Hero): Observable<any> {
  //   return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }
  //
  // addHero(hero: AddHeroDto): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
  //     tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
  //     catchError(this.handleError<Hero>('addHero'))
  //   );
  // }
  //
  // deleteHero(id: number): Observable<Hero> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.delete<Hero>(url, this.httpOptions).pipe(
  //     tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<Hero>('deleteHero'))
  //   );
  // }
  //
  // searchHeroes(term: string): Observable<Hero[]> {
  //   if (!term.trim()) {
  //     return of([]);
  //   }
  //   return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
  //     tap(x => x.length ?
  //       this.log(`found heroes matching "${term}"`) :
  //       this.log(`no heroes matching "${term}"`)),
  //     catchError(this.handleError<Hero[]>('searchHeroes', []))
  //   );
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);
      return of(result as T);
    };
  }
}
