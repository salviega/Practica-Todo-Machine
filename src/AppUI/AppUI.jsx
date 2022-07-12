import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { Modal } from '../Modal/Modal';

function AppUI() {
  const { error, loading, alreadyTodo, onComplete, onDelete, openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>hubo un error</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {!loading && !alreadyTodo.length && <p>Cree tu primer todo</p>}
        {alreadyTodo.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onDelete={() => onDelete(todo.text)}
            onComplete={() => onComplete(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <p>{alreadyTodo[0]?.text}</p>
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </React.Fragment>
  );
}

export { AppUI };
