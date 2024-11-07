import React from 'react';
  

function TodoList({ tasks, onToggle, onDelete }) {
  return (
    <ul>
      {tasks.map(task => (
        <li
          key={task.id}
          className={task.isCompleted ? 'completed' : ''} 
        >
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => onToggle(task.id)}
          />
          {task.description}
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
