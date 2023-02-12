/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

function Todo({
  user, todos, onAddTodo, onMarkTodoAsDone,
}) {
  /**
   * Defining two local states
   */
  const [newTodo, setNewTodo] = useState('');
  /**
   * Set local newTodo state with current input value
   * @param {Object} event
   */
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };
  /**
   * Handle the "create todo" button
   * reset the input value then
   *
   */
  const handleCreate = () => {
    setNewTodo('');
    onAddTodo(newTodo);
  };
  const handleDone = (id) => {
    onMarkTodoAsDone(id);
  };

  return (
    <Wrapper>
      <h2>{`${user.name}'s todos`}</h2>
      <NewTodo>
        <Input type="text" value={newTodo} onChange={handleChange} />
        <Button onClick={handleCreate}>Créer le todo</Button>
      </NewTodo>

      <TodoList>
        { todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          >
            {todo.content}
            <Button onClick={() => handleDone(todo.id)}>Fait</Button>
          </TodoItem>
        )) }
      </TodoList>
    </Wrapper>
  );
}

Todo.defaultProps = {
  todos: [],
};

Todo.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      content: PropTypes.string,
      done: PropTypes.bool,
    }),
  ),
  user: PropTypes.exact({
    name: PropTypes.string,
    username: PropTypes.string,
    token: PropTypes.string,
  }).isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onMarkTodoAsDone: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  width: 48rem;
  margin: 0 auto;
  background: #fff;
  padding: 1rem;
  border-radius: 6px;
`;

const NewTodo = styled.div`
  gap: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  height: 40px;
  padding: 0 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

const Button = styled.button`
  cursor: pointer;
  height: 40px;
  border: none;
  background: #5352ed;
  color: #fff;
  font-weight: bold;
  font-size: 0.8rem;
  border-radius: 6px;
  padding: 0 2rem;
  margin-left: 1rem;
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TodoItem = styled.li`
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 1rem auto;
  padding: 1rem;
  background: #f5f5f5;
  color: ${(props) => (props.todo.done ? '#ccc' : '#404040')};
  text-decoration: ${(props) => (props.todo.done ? 'line-through' : 'initial')};
`;

export default Todo;
