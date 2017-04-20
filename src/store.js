import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer,
         usersReducer,
         loadProducts,
         loadUsers } from './productsReducer';
import  authReducer from './authReducer';

// this is were the global states for our reducers are defined
const combined = combineReducers({
  products: productsReducer,
  users: usersReducer,
  auth: authReducer
});

const store = createStore(combined, applyMiddleware(thunk));

store.dispatch(loadProducts());
store.dispatch(loadUsers());


export default store;
