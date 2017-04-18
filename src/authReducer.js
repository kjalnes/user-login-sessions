// import axios from 'axios';
// import {  LOAD_PRODUCTS_SUCCESS,
//           DESTROY_PRODUCT_SUCCESS,
//           LOAD_USERS_SUCCESS } from './constants';


// import actions and thunk actions
// import {  loadProductsSuccess,
//           destroyProductSuccess,
//           loadUsersSuccess,
//           loadProducts,
//           destroyProduct,
//           loadUsers } from './actions';


const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const loadLoginSuccess = (user)=> ({
  type: LOGIN_SUCCESS,
  user
});

const login = (credentials )=> {
  return (dispatch)=> {
    return axios.post('/api/session')
      .then(response => response.data)
      .then( data => console.log(data));
  };
};


const authReducer = (state={ user: { name: 'moon' }}, action)=> {
  switch(action.type){
    case LOGIN_SUCCESS:
      state = Object.assign({}, state, { user: action.user});
      break;
  }
  return state;
};


export default authReducer;
