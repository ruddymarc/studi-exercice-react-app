/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import Todo from '../Components/Todo';

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
  user: state.todo.user,
});
const mapDispatchToProps = (dispatch) => ({
  onAddTodo: (content) => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: Math.random(),
        content,
        done: false,
      },
    });
  },
  onMarkTodoAsDone: (todoId) => (
    dispatch({
      type: 'MARK_TODO_AS_DONE',
      payload: todoId,
    })
  ),
});

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);
export default TodoContainer;
