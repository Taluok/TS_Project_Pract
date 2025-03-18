import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [{ id: 1, text: "Aprender TypeScript", completed: false }];

app.get("/tasks", (req, res) => res.json(tasks));
app.post("/tasks", (req, res) => {
  const newTask = { id: Date.now(), text: req.body.text, completed: false };
  tasks.push(newTask);
  res.json(newTask);
});

app.listen(3001, () => console.log("API en http://localhost:3001"));
