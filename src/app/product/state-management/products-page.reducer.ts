import {ProductsPageActions, productsPageActionsType} from './products-page.actions';
import {Product} from "../../model/product";
import {Review} from "../../model/review";

// { id: 1, img: 'http://smktesting.herokuapp.com/static/img2.png', text: 'fsdfsd sadfsdaf asdfsd', title: 'string' },
// { id: 2, img: 'http://smktesting.herokuapp.com/static/img2.png', text: 'fsdfsd sadfsdaf asdfsd', title: 'string' },
// { id: 3, img: 'http://smktesting.herokuapp.com/static/img2.png', text: 'fsdfsd sadfsdaf asdfsd', title: 'string' },
// { id: 4, img: 'http://smktesting.herokuapp.com/static/img2.png', text: 'fsdfsd sadfsdaf asdfsd', title: 'string' },

export const productsPageKey = 'productsPage';

export interface ProductsPageState {
  products: Product[];
  currentProduct: Product | null
  productReviews: Review[]
}

const initialState: ProductsPageState = {
  products: [],
  currentProduct: null,
  productReviews: []
};

export const productsPageReducer = (state = initialState, action: ProductsPageActions) => {
  switch (action.type) {
    case productsPageActionsType.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products
      };
    case productsPageActionsType.SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload.product
      };
    case productsPageActionsType.SET_PRODUCT_REVIEWS:
      return {
        ...state,
        productReviews: action.payload.reviews
      };
    default:
      return state;
  }
}
