import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter() {
  const { totalTodo, completedTodos } = React.useContext(TodoContext);
  return (
    <h2 className='TodoCounter'>
      Has completado {completedTodos} de {totalTodo} TODOs
    </h2>
  );
}

export { TodoCounter };
