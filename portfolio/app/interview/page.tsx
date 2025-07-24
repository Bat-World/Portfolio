'use client';

import { useState } from 'react';

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const Interview = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (!input.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(), 
      title: input.trim(),
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setInput('');
  };

  const toggleTaskCompleted = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border rounded p-2 flex-1"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between border p-2 rounded ${
              task.completed ? 'bg-green-100' : ''
            }`}
          >
            <span
              onClick={() => toggleTaskCompleted(task.id)}
              className={`cursor-pointer ${
                task.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Interview;
