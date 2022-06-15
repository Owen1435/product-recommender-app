import {ProductsPageActions} from './products-page.actions';
import {Product} from "../../model/product";

export const productsPageKey = 'productsPage';

export interface ProductsPageState {
  products: Product[];
}

const initialState: ProductsPageState = {
  products: [
    { id: 1, img: 'http://smktesting.herokuapp.com/static/img2.png', text: 'fsdfsd sadfsdaf asdfsd', title: 'string' },
    { id: 2, img: 'http://smktesting.herokuapp.com/static/img2.png', text: 'fsdfsd sadfsdaf asdfsd', title: 'string' },
    { id: 3, img: 'http://smktesting.herokuapp.com/static/img2.png', text: 'fsdfsd sadfsdaf asdfsd', title: 'string' },
    { id: 4, img: 'http://smktesting.herokuapp.com/static/img2.png', text: 'fsdfsd sadfsdaf asdfsd', title: 'string' },
  ],
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
