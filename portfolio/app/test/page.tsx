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
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const hadnleAddTask = () => {
    const newTask = {
      id: Date.now().toString(),
      name: input,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setInput("");
  };

  const hadnleCompleteTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="flex justify-center items-center">
      <div>
        <input
          type="text"
          placeholder="add task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={hadnleAddTask}>add task</button>
        <div className="space-x-4 my-4">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("active")}>Active</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
        <ul>
          {filteredTasks.map((task) => (
            <li>
              <input
                type="checkbox"
                onChange={() => hadnleCompleteTask(task.id)}
              />
              <span
                className={`text-white ${
                  task.completed ? "line-through" : "text-white"
                }`}
              >
                {task.name}
              </span>
              <button
                className="text-red-500 cursor-pointer mr-6"
                onClick={() => handleDeleteTask(task.id)}
              >
                delete task
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
