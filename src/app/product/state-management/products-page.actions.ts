import { Action } from '@ngrx/store';
import { Product } from 'src/app/model/product';
import {Review} from "../../model/review";

export enum productsPageActionsType {
  GET_PRODUCTS_REQUEST = '[products-page] GET_PRODUCTS_REQUEST',
  SET_PRODUCTS = '[products-page] SET_PRODUCTS',
  GET_PRODUCT_BY_ID_REQUEST = '[products-page] GET_PRODUCT_BY_ID_REQUEST',
  SET_CURRENT_PRODUCT = '[products-page] SET_CURRENT_PRODUCT',
  GET_PRODUCT_REVIEWS_REQUEST = '[products-page] GET_PRODUCT_REVIEWS_REQUEST',
  SET_PRODUCT_REVIEWS = '[products-page] SET_PRODUCT_REVIEWS',
}

export class GetProductsRequestAction implements Action {
  readonly type = productsPageActionsType.GET_PRODUCTS_REQUEST;
}

export class SetProductsAction implements Action {
  readonly type = productsPageActionsType.SET_PRODUCTS;
  constructor(public payload: {
    products: Product[];
  }) {}
}

export class GetProductByIdRequestAction implements Action {
  readonly type = productsPageActionsType.GET_PRODUCT_BY_ID_REQUEST;
  constructor(public payload: {
    id: number;
  }) {}
}

export class SetCurrentProductAction implements Action {
  readonly type = productsPageActionsType.SET_CURRENT_PRODUCT;
  constructor(public payload: {
    product: Product | null;
  }) {}
}

export class GetProductReviewsRequestAction implements Action {
  readonly type = productsPageActionsType.GET_PRODUCT_REVIEWS_REQUEST;
  constructor(public payload: {
    id: number;
  }) {}
}

export class SetProductReviewsAction implements Action {
  readonly type = productsPageActionsType.SET_PRODUCT_REVIEWS;
  constructor(public payload: {
    reviews: Review[];
  }) {}
}

export type ProductsPageActions
  = GetProductsRequestAction
  | SetProductsAction
  | GetProductByIdRequestAction
  | SetCurrentProductAction
  | GetProductReviewsRequestAction
  | SetProductReviewsAction
