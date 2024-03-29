import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../reducers/rootReducer';

const TodoInput = () => {
  const [todo, setTodo] = useState('');

  const dispatch = useDispatch();

  const onChange = e => {
    setTodo(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (todo.trim() === '') return;

    dispatch(
      addTodoAction({ name: todo, complete: false, id: new Date().getTime() })
    );

    setTodo('');
  };
  return (
    <form onSubmit={onSubmit}>
      <div className='form-div'>
        <input
          type='text'
          name='todo'
          placeholder='Add a todo'
          value={todo}
          onChange={onChange}
        />
        <button type='submit'>Add Todo</button>
      </div>
    </form>
  );
};

export default TodoInput;
