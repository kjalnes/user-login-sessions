import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer,
         usersReducer,
         loadProducts,
         loadUsers } from './productsReducer';
import  authReducer from './authReducer';

const combined = combineReducers({
  products: productsReducer,
  users: usersReducer,
  auth: authReducer
});

const store = createStore(combined, applyMiddleware(thunk));

store.dispatch(loadProducts());
store.dispatch(loadUsers());


export default store;
