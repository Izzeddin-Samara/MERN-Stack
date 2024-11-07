import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList'; 

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskItem = {
        id: Date.now(),
        description: newTask,
        isCompleted: false,
      };
      setTasks([...tasks, newTaskItem]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    ));
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
      {/* Render the TodoList component here and pass tasks, onToggle, and onDelete as props */}
      <TodoList
        tasks={tasks}             // Pass tasks state to TodoList
        onToggle={toggleTaskCompletion} // Pass toggleTaskCompletion function to TodoList
        onDelete={handleDeleteTask}     // Pass handleDeleteTask function to TodoList
      />
    </div>
  );
}

export default App;
