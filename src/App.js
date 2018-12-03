import React, { useState } from 'react';

import Input from './components/Input';
import { useInput } from './hooks/useInput';

const App = () => {
  const newTodo = useInput('');
  const [todos, setTodos] = useState([]);
  console.log(newTodo.value);
  return (
    <>
      <Input type="text" {...newTodo.bindToInput} placeholder="new todo" />
      <button
        disabled={!newTodo.hasValue}
        onClick={() => {
          setTodos(newTodo.value);
          newTodo.clear();
        }}
      >
        {' '}
        Add
      </button>

      <p>{todos}</p>
    </>
  );
};

export default App;
