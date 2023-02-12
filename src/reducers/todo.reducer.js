/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { createAction, createSlice } from '@reduxjs/toolkit';

const actions = {
  addTodo: createAction('addTodo'),
  markTodoAsDone: createAction('markTodoAsDone'),
};

const initialState = {
  todos: [],
  user: {
    name: 'John',
    username: 'itsjohn',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THs',
  },
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.addTodo, (state, action) => ({
        ...state,
        todos: [...state.todos, action.payload],
      }))
      .addCase(actions.markTodoAsDone, (state, action) => {
        const targetTodo = state.todos.find((todo) => todo.id === action.payload);
        return {
          ...state,
          todos: [
            ...state.todos.filter((todo) => todo.id !== action.payload),
            { ...targetTodo, done: true },
          ],
        };
      })
      .addDefaultCase((state) => state);
  },
});

export const { addTodo, markTodoAsDone } = actions;
export default todoSlice.reducer;
