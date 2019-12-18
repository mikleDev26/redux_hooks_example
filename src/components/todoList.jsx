import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../reducers/rootReducer';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type='checkbox'
            checked={todo.complete}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span className={todo.complete ? 'complete' : null}>{todo.name}</span>
          <span
            className='delete-button'
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
