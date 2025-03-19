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
    <div style={containerStyle}>
      <h1 style={headingStyle}>Gestor de Tareas</h1>
      <input
        style={inputStyle}
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button
        style={buttonStyle}
        onClick={addTask}
      >
        Agregar Tarea
      </button>
      <ul style={listStyle}>
        {tasks.map((task) => (
          <li key={task.id} style={listItemStyle}>
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Estilos en línea
const containerStyle = {
  maxWidth: '768px',
  margin: '20px auto',
  padding: '20px',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
};

const headingStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
  textAlign: 'center',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  marginBottom: '10px',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '100%',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
  marginTop: '20px',
};

const listItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  borderBottom: '1px solid #eee',
};



