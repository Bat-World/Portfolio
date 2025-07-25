// add task
// make task complete when check the box
// delete task
// list of tasks

"use client";


import { useState } from "react";

type Task = {
  id: string;
  name: string;
  completed: boolean;
};

const ToDo = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (!input.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      name: input,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setInput("");
  };

  const completeTask = (id: string) => {
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
    <div>
      <input
        type="text"
        placeholder="add task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTask}>add task</button>
      <ul>
        {tasks?.map((task) => (
          <li key={task.id}>
            <input type="checkbox" onChange={() => completeTask(task.id)} />
            <span
              className={` text-white  ${task.completed ? "line-through" : ""}`}
            >
              {task.name}
            </span>
            <button
              className="text-red-500"
              onClick={() => deleteTask(task.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
      <p>{tasks.length} tasks total, {tasks.filter((t) => t.completed).length} completed.</p>
    </div>
  );
};

export default ToDo;
