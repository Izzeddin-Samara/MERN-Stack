import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

// Reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTaskList = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newTaskList));
      return { ...state, tasks: newTaskList };

    case 'DELETE_TASK':
      const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return { ...state, tasks: filteredTasks };

    case 'TOGGLE_TASK':
      const updatedTasks = state.tasks.map(task =>
        task.id === action.payload ? { ...task, isCompleted: !task.isCompleted } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return { ...state, tasks: updatedTasks };

    default:
      return state;
  }
};

// Create Context
export const TodoContext = createContext();

// Provider component
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ tasks: state.tasks, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
