/* eslint-disable import/no-unresolved */
import { combineReducers, createStore } from 'redux';
import shop, { buyItem, emptyCart } from './reducers/shop.reducer';
import todo, { addTodo, markTodoAsDone } from './reducers/todo.reducer';

const root = combineReducers({
  shop, todo,
});
const store = createStore(root);

store.subscribe(() => { console.log(store.getState()); });

export {
  buyItem, emptyCart, addTodo, markTodoAsDone,
};
export default store;
