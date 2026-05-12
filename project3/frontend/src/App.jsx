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
    <div style={{ 
      maxWidth: "400px", 
      margin: "50px auto", 
      padding: "20px", 
      fontFamily: "sans-serif",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      borderRadius: "8px",
      backgroundColor: "#fff"
    }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Task Manager</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New task..."
          style={{ 
            flex: 1, 
            padding: "10px", 
            borderRadius: "4px", 
            border: "1px solid #ddd",
            outline: "none"
          }}
        />
        <button 
          onClick={addTask}
          style={{ 
            padding: "10px 15px", 
            backgroundColor: "#007bff", 
            color: "white", 
            border: "none", 
            borderRadius: "4px", 
            cursor: "pointer" 
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t) => (
          <li 
            key={t._id} 
            style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              padding: "10px",
              borderBottom: "1px solid #eee"
            }}
          >
            <span style={{ color: "#555" }}>{t.text}</span>
            <button 
              onClick={() => deleteTask(t._id)}
              style={{ 
                backgroundColor: "#ff4d4d", 
                color: "white", 
                border: "none", 
                borderRadius: "4px", 
                padding: "5px 10px", 
                cursor: "pointer",
                fontSize: "12px"
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;