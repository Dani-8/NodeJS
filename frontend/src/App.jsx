import 
import { useState, useEffect } from "react"

function App() {
  const [serverMsg, setServerMsg] = useState("Loading...")

  // useEffect(() => {
  //   fetch("https://nodejs-production-7abc.up.railway.app")
  //     .then((res) => res.text())
  //     .then((data) => setServerMsg(data))
  //     .catch((err) => console.error("Error:", err));
  // }, []);

  // ======================================================== 

  useEffect(() => {
    async function getData() {
      const prodURL = "https://nodejs-production-7abc.up.railway.app";
      const localURL = "http://localhost:5000";

      try {
        console.log("Trying LOCAL server...")
        const res = await fetch(localURL)
        const data = await res.text()

        console.log("LOCAL server worked")
        setServerMsg(data)
      } catch (e) {
        console.log("LOCAL failed...")

        try {
          console.log("Trying PROD server...")
          const res = await fetch(prodURL)
          const data = await res.text()

          console.log("PROD server worked")
          setServerMsg(data)
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
    <div>
      <h1>My First Full-Stack</h1>
      <p>Server says: <strong>{serverMsg}</strong></p>
    </div>



  );
}

export default App