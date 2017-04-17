import axios from 'axios';

import {
  LOAD_PRODUCTS_SUCCESS,
  DESTROY_PRODUCT_SUCCESS,
  UNSET_FAVORITE_PRODUCT,
  LOAD_USERS_SUCCESS  } from './constants';

const loadProductsSuccess = (products)=> ({
  type: LOAD_PRODUCTS_SUCCESS,
  products: products
});

const destroyProductSuccess = (product)=> ({
  type: DESTROY_PRODUCT_SUCCESS,
  product: product
});

const loadUsersSuccess = (users) => ({
    type: LOAD_USERS_SUCCESS,
    users: users
});


export { loadProductsSuccess, destroyProductSuccess, loadUsersSuccess };

