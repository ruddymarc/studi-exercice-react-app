/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {
    addTodo: (state, action) => ({
      ...state,
      todos: [...state.todos, action.payload],
    }),
    markTodoAsDone: (state, action) => {
      const targetTodo = state.todos.find((todo) => todo.id === action.payload);
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo) => todo.id !== action.payload),
          { ...targetTodo, done: true },
        ],
      };
    },
  },
});

export const { addTodo, markTodoAsDone } = todoSlice.actions;
export default todoSlice.reducer;
