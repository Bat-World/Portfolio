"use client";

import { useState } from "react";
import { useEffect } from "react";
import UserList from "../../components/UserList";

type Task = {
  id: string;
  name: string;
  completed: boolean;
};

type User = {
  id: number;
  name: string;
  email: string;
};
const ToDo = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [users, setUsers] = useState<User[]>([]);

  const handleAddTask = () => {
    const newTask = {
      id: Date.now().toString(),
      name: input,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setInput("");
  };

  const handleCompleteTask = (id: string) => {
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

  const getUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await data.json();
    setUsers(res);
  };

  useEffect(() => {
    getUsers();
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="">
      <input
        type="text"
        value={input}
        placeholder="add task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTask} className="pointer-cursor">
        create task
      </button>
      <div>
        <button onClick={() => setFilter("all")} className="cursor-pointer m-4">
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className="cursor-pointer m-4"
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className="cursor-pointer m-4"
        >
          Completed
        </button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              onChange={() => handleCompleteTask(task.id)}
            />
            <span
              className={`text-white ${task.completed ? "line-through" : ""}`}
            >
              {task.name}
            </span>
            <button
              className="text-red-500 cursor-pointer"
              onClick={() => handleDeleteTask(task.id)}
            >
              delete task
            </button>
          </li>
        ))}
      </ul>
      <span>
        {tasks.length} total tasks, {tasks.filter((t) => t.completed).length}{" "}
        completed
      </span>
      <UserList users={users} />
    </div>
  );
};

export default ToDo;
