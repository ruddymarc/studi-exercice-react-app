/* eslint-disable import/no-unresolved */
import { combineReducers, createStore } from 'redux';
import shopReducer from './reducers/shop.reducer';
import todoReducer from './reducers/todo.reducer';

const root = combineReducers({
  shop: shopReducer,
  todo: todoReducer,
});
const store = createStore(root);

store.subscribe(() => { console.log(store.getState()); });

export default store;
