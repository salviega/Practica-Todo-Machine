import React from 'react';
import { AppUI } from '../AppUI/AppUI';
import { TodoProvider } from '../TodoContext/TodoContext';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
