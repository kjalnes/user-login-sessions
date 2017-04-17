import axios from 'axios';
import {  LOAD_PRODUCTS_SUCCESS,
          DESTROY_PRODUCT_SUCCESS,
          LOAD_USERS_SUCCESS } from './constants';

import { loadProductsSuccess, destroyProductSuccess, loadUsersSuccess } from './actions';


const loadProducts = ()=> {
  return (dispatch)=> {
    return axios.get('/api/products')
      .then(response => dispatch(loadProductsSuccess(response.data)));
  };
};


const destroyProduct = (product)=> {
  return (dispatch)=> {
    return axios.delete(`/api/products/${product.id}`)
      .then(response => dispatch(destroyProductSuccess(product)));
  };
};





let initialState = {
  products: [],
  users: []
}


const productsReducer = (state=[], action)=> {
  switch(action.type){
    case LOAD_PRODUCTS_SUCCESS:
      state = action.products;
      break;
    case DESTROY_PRODUCT_SUCCESS:
      state = state.filter(product=> product.id != action.product.id);
      break;
  }
  return state;
};


const loadUsers = ()=> {
  return (dispatch)=> {
    return axios.get('/api/users')
      .then(response => dispatch(loadUsersSuccess(response.data)));
  };
};



const usersReducer = (state=[], action)=> {
  switch(action.type){
    case LOAD_USERS_SUCCESS:
      state = action.users;
      break;
  }
  return state;
};


export {
  destroyProduct, // gets dispatched on delete click ProductList
  loadProducts,  // gets dispatched in store
  loadUsers,
  productsReducer,
  usersReducer
};
