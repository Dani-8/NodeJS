import { useState, useEffect } from 'react'

function App() {
  const [serverMsg, setServerMsg] = useState("Loading...");

  useEffect(() => {
    // Calling your Node.js server
    fetch("http://localhost:5000")
      .then((res) => res.text()) // Use .text() because your server sends text/plain
      .then((data) => setServerMsg(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h1>My First Full-Stack</h1>
      <p>Server says: <strong>{serverMsg}</strong></p>
    </div>
  )
}

export default App