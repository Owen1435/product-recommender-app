import {ProductsPageActions, productsPageActionsType} from './products-page.actions';
import {Product} from "../../model/product";

export const productsPageKey = 'productsPage';

export interface ProductsPageState {
  products: Product[];
}

const initialState: ProductsPageState = {
  products: [],
};

export const productsPageReducer = (state = initialState, action: ProductsPageActions) => {
  switch (action.type) {
    // case heroesActionsType.SET_HEROES:
    //   return {
    //     ...state,
    //     heroes: action.payload.heroes
    //   };
    default:
      return state;
  }
}
