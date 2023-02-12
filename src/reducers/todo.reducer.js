/* eslint-disable default-param-last */
const initialState = {
  todos: [],
  user: {
    name: 'John',
    username: 'itsjohn',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THs',
  },
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'MARK_TODO_AS_DONE': {
      const targetTodo = state.todos.find((todo) => todo.id === action.payload);
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo) => todo.id !== action.payload),
          { ...targetTodo, done: true },
        ],
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
