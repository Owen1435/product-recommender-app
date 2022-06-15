import { Action } from '@ngrx/store';
import { Product } from 'src/app/model/product';

export enum productsPageActionsType {
  GET_PRODUCTS_REQUEST = '[products-page] GET_PRODUCTS_REQUEST',
  SET_PRODUCTS = '[products-page] SET_PRODUCTS',
  GET_PRODUCT_BY_ID_REQUEST = '[products-page] GET_PRODUCT_BY_ID_REQUEST',
  SET_SELECTED_PRODUCT = '[products-page] SET_SELECTED_PRODUCT',
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

export type ProductsPageActions
  = GetProductsRequestAction
  | SetProductsAction
