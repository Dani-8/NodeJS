import Guide from '../../../backend/server?raw'
import App from '../App?raw'


const codeFiles = {
    "server.js": Guide,
    "App.jsx": `import Guide from "./components/Guide";
import CodeExplorer from "./page/CodeExplorer";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

function App() {
  const [serverMsg, setServerMsg] = useState("Loading...")

  // UNCOMMENT THIS & TEST THIS FIRST SERVER AS A BEGINNER BEFORE MOVING TO THE ASYNC/AWAIT VERSION BELOW
  // --------------------------------------------
  // useEffect(() => {
  //   fetch("https://nodejs-production-7abc.up.railway.app")
  //     .then((res) => res.text())
  //     .then((data) => setServerMsg(data))
  //     .catch((err) => console.error("Error:", err));
  // }, []);

  // ======================================================== 

  // ASYNC/AWAIT VERSION WITH LOCAL + PROD SERVER TESTING (ADVANCED BEGINNER)
  // --------------------------------------------
  useEffect(() => {
    async function getData() {
      const prodURL = "https://nodejs-production-7abc.up.railway.app";
      const localURL = "http://localhost:5000";

      try {
        console.log("Trying LOCAL server...")
        const res = await fetch(localURL)
        const data = await res.json()

        console.log("LOCAL server worked")
        setServerMsg(data.message)
      } catch (e) {
        console.log("LOCAL failed...")

        try {
          console.log("Trying PROD server...")
          const res = await fetch(prodURL)
          const data = await res.json()

          console.log("PROD server worked")
          setServerMsg(data.message)
        } catch (err) {
          console.log("BOTH FAILED")
          setServerMsg("Both servers failed")
        }
      }
    }

    getData()
  }, [])

  // ======================================================== 

  return (
    <>
      <div>
        <h1>My First Full-Stack</h1>
        <p>Server says: <strong>{serverMsg}</strong></p>
      </div>
    </>
  );
}

export default App
    `
}

export default codeFiles