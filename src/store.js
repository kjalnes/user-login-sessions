import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer, usersReducer, loadProducts, loadUsers } from './productsReducer';


const combined = combineReducers({
  products: productsReducer,
  users: usersReducer
});

const store = createStore(combined, applyMiddleware(thunk));


store.dispatch(loadProducts());
store.dispatch(loadUsers());


export default store;
