import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const { item: todos, saveTodo, loading, error } = useLocalStorage('TODOS_V1', []);
  const [openModal, setOpenModal] = React.useState(false);
  const [seachValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter((item) => !!item.completed).length;
  const totalTodo = todos.length;

  const alreadyTodo = todos.filter((item) => {
    let itemText = item.text.toLocaleLowerCase();
    let searchText = seachValue.toLocaleLowerCase();
    return !!itemText.includes(searchText);
  });

  const onDelete = (text) => {
    let filteredItem = todos.filter((item) => item.text !== text);
    saveTodo(filteredItem);
  };

  const onComplete = (text) => {
    let completedItem = todos.map((item) => {
      if (item.text === text) item.completed = true;
      return item;
    });
    saveTodo(completedItem);
  };

  React.useEffect(() => {
    console.log('aquí está el código de useEffect');
  }, [totalTodo]);

  return (
    <TodoContext.Provider
      value={{ totalTodo, completedTodos, seachValue, setSearchValue, alreadyTodo, onComplete, onDelete, loading, error, openModal, setOpenModal }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
