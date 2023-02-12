/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import { addTodo, markTodoAsDone } from '../store';
import Todo from '../Components/Todo';

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
  user: state.todo.user,
});
const mapDispatchToProps = (dispatch) => ({
  onAddTodo: (content) => {
    dispatch(addTodo({
      id: Math.random(),
      content,
      done: false,
    }));
  },
  onMarkTodoAsDone: (todoId) => (
    dispatch(markTodoAsDone(todoId))
  ),
});

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);
export default TodoContainer;
