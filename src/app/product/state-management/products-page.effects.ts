import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {ProductService} from "../services/product.service";
import {
  GetProductByIdRequestAction,
  GetProductsRequestAction,
  productsPageActionsType,
  SetCurrentProductAction, SetProductsAction
} from "./products-page.actions";

@Injectable()
export class ProductsPageEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType<GetProductsRequestAction>(productsPageActionsType.GET_PRODUCTS_REQUEST),
    mergeMap(() => this.productService.getProducts().pipe(
      map((products) => {
        return new SetProductsAction({
          products
        })
      }),
      catchError(() => of({ type: 'something was wrong' }))
    )),
  ))

  getProductById$ = createEffect(() => this.actions$.pipe(
    ofType<GetProductByIdRequestAction>(productsPageActionsType.GET_PRODUCT_BY_ID_REQUEST),
    map(action => action.payload),
    mergeMap((payload) => this.productService.getProduct(payload.id).pipe(
      map((product) => {
        return new SetCurrentProductAction({
          product
        })
      }),
      catchError(() => of({ type: 'something was wrong' }))
    )),
  ))
}
