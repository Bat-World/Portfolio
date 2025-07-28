"use client";

import { useEffect, useState } from "react";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const Interview = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "active">("all");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!input.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: input.trim(),
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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

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
      <div className="space-x-4 my-4">
        <button onClick={() => setFilter("all")} className={`px-3 py-1 rounded cursor-pointer ${ filter === "all" ? 'bg-blue-500' : 'bg-gray-200 text-black'}`}>All</button>
        <button onClick={() => setFilter("active")} className={`px-3 py-1 rounded cursor-pointer ${ filter === "active" ? 'bg-blue-500' : 'bg-gray-200 text-black'}`}>Active</button>
        <button onClick={() => setFilter("completed")} className={`px-3 py-1 rounded cursor-pointer ${ filter === "completed" ? 'bg-blue-500' : 'bg-gray-200 text-black'}`}>Completed</button>
      </div>
      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between border p-2 rounded ${
              task.completed ? "bg-green-100" : ""
            }`}
          >
            <input type="checkbox" onChange={() => completeTask(task.id)} />
            <span>{task.title}</span>
            <button
              className="text-red-500"
              onClick={() => deleteTask(task.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
      <p>
        {tasks.length} tasks total, {tasks.filter((t) => t.completed).length}{" "}
        completed
      </p>
    </div>
  );
};

export default Interview;
