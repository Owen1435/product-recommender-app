import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productsPageKey, ProductsPageState } from './products-page.reducer';

export const featureSelector = createFeatureSelector<ProductsPageState>(productsPageKey);

export const productsSelector = createSelector(
  featureSelector,
  (state) => state.products
);
