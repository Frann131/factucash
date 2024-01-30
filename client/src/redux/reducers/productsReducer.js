import {
  GET_PRODUCT_BY_CODE,
} from '../actions/productsActions.js';

const initialState = {
  product: {},
  products: [],
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCT_BY_CODE:
        return {
          ...state,
          product: action.payload
        }
    }
    if (typeof state == "undefined") {
      return initialState
    } 
  };

export default productsReducer;