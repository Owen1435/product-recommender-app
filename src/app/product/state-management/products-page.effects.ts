import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {ProductService} from "../services/product.service";
import {
  AddProductReviewRequestAction,
  GetProductByIdRequestAction, GetProductReviewsRequestAction,
  GetProductsRequestAction,
  productsPageActionsType,
  SetCurrentProductAction, SetProductReviewsAction, SetProductsAction
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

  getProductReviews$ = createEffect(() => this.actions$.pipe(
    ofType<GetProductReviewsRequestAction>(productsPageActionsType.GET_PRODUCT_REVIEWS_REQUEST),
    map(action => action.payload),
    mergeMap((payload) => this.productService.getProductReviews(payload.id).pipe(
      map((reviews) => {
        return new SetProductReviewsAction({
          reviews
        })
      }),
      catchError(() => of({ type: 'something was wrong' }))
    )),
  ))

  addProductReview$ = createEffect(() => this.actions$.pipe(
    ofType<AddProductReviewRequestAction>(productsPageActionsType.ADD_PRODUCT_REVIEW_REQUEST),
    map(action => action.payload),
    mergeMap((payload) => this.productService.addProductReview(payload.id, payload.addProductReviewDto).pipe(
      map((resp) => {
        return new GetProductReviewsRequestAction({id: resp.productId})
      }),
      catchError((resp) => {
        console.log('error', resp.status)
        return of({ type: 'something was wrong' })
      })
    )),
  ))
}
