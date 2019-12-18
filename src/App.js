import React from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className='App main'>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
