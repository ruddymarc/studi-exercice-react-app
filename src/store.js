/* eslint-disable import/no-unresolved */
import { configureStore } from '@reduxjs/toolkit';
import shop, { buyItem, emptyCart } from './reducers/shop.reducer';
import todo, { addTodo, markTodoAsDone } from './reducers/todo.reducer';

const store = configureStore({
  reducer: { todo, shop },
});

store.subscribe(() => { console.log(store.getState()); });

export {
  buyItem, emptyCart, addTodo, markTodoAsDone,
};
export default store;
