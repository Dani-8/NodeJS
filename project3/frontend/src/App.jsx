import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const API = "http://localhost:5000/tasks";

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!input.trim()) return;

    await axios.post(API, { text: input });
    setInput("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New task..."
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t) => (
          <li key={t._id}>
            {t.text} <button onClick={() => deleteTask(t._id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;