/* eslint-disable import/no-unresolved */
import React from 'react';
import './Todos.css';

function Todos() {
  const todos = [
    {
      id: 1, text: 'Faire la vaisselle', createdAt: '2020-03-10', status: 'à faire',
    },
    {
      id: 2, text: 'Sortir le chien', createdAt: '2020-03-02', status: 'à faire',
    },
    {
      id: 3, text: 'Apprendre React', createdAt: '2020-02-24', status: 'à faire',
    },
  ];
  const todosJSX = todos.map((todo) => (
    <li className="TodoItem" key={todo.id}>
      <span>{new Date(todo.createdAt).toLocaleDateString()}</span>
      <p>{`${todo.text} - ${todo.status}`}</p>
    </li>
  ));

  return (
    <div className="Wrapper">
      <h2>Mes todos</h2>
      <ul className="TodoList">{todosJSX}</ul>
    </div>
  );
}

export default Todos;
