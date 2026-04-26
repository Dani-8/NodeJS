import { useState, useEffect } from 'react'

function App() {
  const [serverMsg, setServerMsg] = useState("Loading...");

  useEffect(() => {
    fetch("http://nodejs-production-7abc.up.railway.app" )
      .then((res) => res.text())
      .then((data) => setServerMsg(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  // ========================================================

  return (
    <div>
      <h1>My First Full-Stack</h1>
      <p>Server says: <strong>{serverMsg}</strong></p>
    </div>
  )
}

export default App