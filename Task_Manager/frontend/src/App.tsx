import { useEffect, useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then(setTasks);
  }, []);

  const addTask = () => {
    if (newTask.trim() === "") return;
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newTask }),
    })
      .then((res) => res.json())
      .then((task) => setTasks([...tasks, task]));
    setNewTask("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-xl font-bold mb-4">Gestor de Tareas</h1>
      <input
        className="border p-2 w-full"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button
        className="bg-blue-500 text-white p-2 mt-2 w-full"
        onClick={addTask}
      >
        Agregar Tarea
      </button>
      <ul className="mt-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between p-2 border-b">
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

