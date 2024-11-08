import React, { useState, useContext } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { TodoContext, TodoProvider } from './TodoContext';

function App() {
  const { tasks, dispatch } = useContext(TodoContext);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskItem = {
        id: Date.now(),
        description: newTask,
        isCompleted: false,
      };
      dispatch({ type: 'ADD_TASK', payload: newTaskItem });
      setNewTask('');
    }
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <TodoList />
    </div>
  );
}

// Wrap the App component with TodoProvider
export default function Root() {
  return (
    <TodoProvider>
      <App />
    </TodoProvider>
  );
}
