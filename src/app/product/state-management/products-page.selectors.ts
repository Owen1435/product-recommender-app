import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productsPageKey, ProductsPageState } from './products-page.reducer';

export const featureSelector = createFeatureSelector<ProductsPageState>(productsPageKey);

export const productsSelector = createSelector(
  featureSelector,
  (state) => state.products
);

export const currentProductSelector = createSelector(
  featureSelector,
  (state) => state.currentProduct
);

export const productReviewsSelector = createSelector(
  featureSelector,
  (state) => state.productReviews
);

