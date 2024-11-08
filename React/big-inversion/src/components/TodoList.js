import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';

function TodoList() {
  const { tasks, dispatch } = useContext(TodoContext);

  const handleToggle = (taskId) => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId });
  };

  const handleDelete = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} className={task.isCompleted ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => handleToggle(task.id)}
          />
          {task.description}
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
