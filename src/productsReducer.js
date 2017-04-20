// import axios from 'axios';
import {  LOAD_PRODUCTS_SUCCESS,
          DESTROY_PRODUCT_SUCCESS,
          LOAD_USERS_SUCCESS,
          LOAD_UPDATE_SUCCESS } from './constants';


// import actions and thunk actions
import {  loadProductsSuccess,
          destroyProductSuccess,
          loadUsersSuccess,
          loadProducts,
          destroyProduct,
          loadUsers,
          updateUser } from './actions';


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


const usersReducer = (state=[], action)=> {
  switch(action.type){
    case LOAD_USERS_SUCCESS:
      state = action.users;
      break;
    // case LOAD_UPDATE_SUCCESS:
    //   state = state.map( user => {
    //       if( user.id === action.user.id) {
    //         user = action.user
    //       }
    //       console.log('user', user)
    //       return user;
    //   })
    //   console.log('state', state)
    //   break;
  }
  return state;
};


export {
  destroyProduct, // gets dispatched on delete click ProductList
  loadProducts,  // gets dispatched in store.js
  loadUsers, // gets dispatched in store.js
  productsReducer, // gets combined in store.js
  usersReducer
};
