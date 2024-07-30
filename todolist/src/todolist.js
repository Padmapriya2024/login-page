import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleToggleComplete = (index) => {
    const newTasks = tasks.map((t, i) => 
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
            {t.text}
            <button onClick={() => handleToggleComplete(index)}>
              {t.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
